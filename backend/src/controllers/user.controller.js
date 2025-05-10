import User from "../models/User.js";


//controller for user recommendation----------------------------------->
export async function getRecommendedUsers(req, res) {
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;
        const recommendedUsers = await User.find({
            $and: [
                { _id: { $ne: currentUserId } },  // exclude the current user 
                { $id: { $nin: currentUser.friends } }, // exclude the friends of the current user
                { isOnboarded: true },
            ],
        });
        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.error("Error in getRecommendedUsers controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });

    }
}

//controller for getting the friends that already have--------------------->

export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user.id)
            .select("friends")
            .populate("friends", "fullName profilePic nativeLanguage learningLanguage");

        res.status(200).json(user.friends);
    } catch (error) {
        console.error("Error in getMyFriends controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
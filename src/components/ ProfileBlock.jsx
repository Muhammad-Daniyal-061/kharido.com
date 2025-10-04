import defaultImage from "../assets/pictures/profileImage.jpg"



function ProfileBlock ({userName = "Muhammad Daniyal" , profileImage = defaultImage}){
    return (
        <>
        <div className="h-14 flex  justify-center items-center flex-row-reverse  bg-[#f2e8cf] p-2 rounded text-blue-950 font-medium ">
            <img src={profileImage} alt="profileImage" className="h-full rounded" />
            <p className="text-xs pr-3">{userName}</p>
        </div>
        </>
    )
}



export default ProfileBlock;
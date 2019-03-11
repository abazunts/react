let initialState = {
    friends: [
        {
            id: "0",
            name: "Richard Nyman",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            status: "Online"
        },
        {
            id: "1",
            name: "Isaiah Ayrton",
            avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
            status: "Online"
        },
        {
            id: "2",
            name: "Destiny Higgins",
            avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
            status: "Online"
        }
    ]
}

const friendReducer = (state = initialState, action) => {
    return state;
}

export default friendReducer;
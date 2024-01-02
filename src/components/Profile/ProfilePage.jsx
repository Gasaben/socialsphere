import "./Profile.css"
import PostList from "./Post-list/List"
import CreatePosts from "./Posts/CreatePost"





const ProfilePage = () => {
    return (
          <content className="content">
        <div className="content-container">
<img className="img-landscape" alt="scape" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0057.jpg" />
        </div>

        <div className="profile-container">
          <div className="profile-img-con">
          <img className="profile-img" src="https://preview.redd.it/made-my-avatar-as-a-joke-now-i-cant-change-back-to-my-old-v0-fyzk2bhbrsza1.jpg?width=640&crop=smart&auto=webp&s=4e0bcf8be256b363bf1e44e370ad5f028984ba67" alt="log"/>
          </div>
          <div className="profile-info">
            Vitaliy Ponomarenko
           <br/> Date of Birthday; 20 December
            <br /> City: Kharkiv
            <br /> Educations: MAUP
            <br /> Web site : www.something.com
</div>
        </div>

        <CreatePosts />
        <PostList message="nice beard" Likes="10" avatar="https://img.itch.zone/aW1hZ2UvMTcxMDcyLzgyNzk5Ni5wbmc=/original/14LiKJ.png"  ></PostList>
        <PostList message="how are u?" Likes="15" avatar="https://i.pinimg.com/736x/9b/0d/a2/9b0da29b8cf529c80f503064699b255d.jpg"></PostList>
      </content>
    )
} 
export default ProfilePage
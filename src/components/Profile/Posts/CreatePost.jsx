import "./CreatePost.css"

const CreatePosts = () => {
    return (
        <div className="create-post">
            <div>My Post</div>
            <div className="input-create-post">
<input type="text" placeholder="your news" className="input-post"/>
                <button>Опубликовать</button>
                <button>Удалить</button>
            </div>
    </div>

)

}

export default CreatePosts

import "./List.css"


const PostList = (props) => {
    return (
        <div className="List-items">
            <ul>
                <li className="item">
                    <img className="list-img" src= {props.avatar} />
                    {props.message}
                    <br/>
                    <span > {props.Likes} 👍</span>
                </li>

</ul>
        </div>


    )
}

export default PostList
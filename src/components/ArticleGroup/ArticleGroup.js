import './ArticleGroup.scss';

const ArticleGroup = (props) => {

    return (
        <div className="articleGroup">
            <h2 className="articleGroup__title title">{props.title}</h2>
            <div className="articleGroup__wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default ArticleGroup;
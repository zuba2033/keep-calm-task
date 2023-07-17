import './Article.scss';

const Article = (props) => {

    const {subtitle, text} = props.articleData;
    const {reverse, image} = props

    return (
        <article className="article">
            {!reverse ? 
                <>
                    <figure className="article__image">
                        <img src={image} alt="article" />
                    </figure>
                    <div className="article__text" >
                        <h3 >
                            {subtitle}
                        </h3>
                        <p>
                            {text}
                        </p>
                    </div>
                </> : 
                <>
                    <div className="article__text article__text-reverse">
                        <h3 >
                            {subtitle}
                        </h3>
                        <p>
                            {text}
                        </p>
                    </div>
                    <figure className="article__image">
                        <img src={image} alt="article" />
                    </figure>
                </>
                }


        </article>
    )
}

export default Article;
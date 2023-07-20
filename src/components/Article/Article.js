import './Article.scss';

const Article = (props) => {

    const {subtitle, text} = props.articleData;
    const {reverse, image, imageMin} = props

    return (
        <>
            {!reverse ? 
                <article className="article">
                    <picture className="article__image">
                        <source srcSet={imageMin} media="(max-width: 480px)" />
                        <img srcSet={image} alt="article" />
                    </picture>
                    <div className="article__text" >
                        <h3 >
                            {subtitle}
                        </h3>
                        <p>
                            {text}
                        </p>
                    </div>
                </article> : 
                <article className="article article-reverse">
                    <div className="article__text article__text-reverse">
                        <h3 >
                            {subtitle}
                        </h3>
                        <p>
                            {text}
                        </p>
                    </div>
                    <picture className="article__image">
                        <source srcSet={imageMin} media="(max-width: 480px)" />
                        <img srcSet={image} alt="article" />
                    </picture>
                </article>
                }


        </>
    )
}

export default Article;
import { Fragment, useEffect } from "react";
import  Comments  from "../components/comments/Comments"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch()
    const {quoteId} = params

    const {sendRequest, status, data:LoadedData, error} = useHttp(getSingleQuote)

    useEffect(()=>{
        sendRequest(quoteId)
    }, [sendRequest,quoteId])

    if(status == 'pending'){
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if(error){
        return <div className='centered focused'>
            {error}
        </div>
    }
    if(!(LoadedData && LoadedData.text)){
        return <p>No Quote Found</p>
    }
    return <Fragment>
            <HighlightedQuote text={LoadedData.text} author={LoadedData.author}/>
            <Route path={`${match.path}`} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
            </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
}

export default QuoteDetails
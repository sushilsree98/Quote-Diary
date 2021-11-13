import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
    const {sendRequest, status, data:LoadedQuotes, error} = useHttp(getAllQuotes, true)

    useEffect(()=>{
        sendRequest()
    }, [])

    if(status == 'pending'){
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if(status == error){
        return <div className='centered focused'>
            {error}
        </div>
    }

    if(status == 'completed' && (!LoadedQuotes || LoadedQuotes.length == 0)){
        return <div>
            <NoQuotesFound/>
        </div>
    }
    return <div>
        <QuoteList quotes={LoadedQuotes} />
    </div>
}

export default withRouter(AllQuotes)
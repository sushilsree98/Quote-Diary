import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useHistory } from "react-router-dom";
const NewQuote = () => {
    const history = useHistory()
    const {sendRequest, status} = useHttp(addQuote)

    const handleQuoteData = (quoteData) => {
        sendRequest(quoteData).then(() => history.push('/quotes'))
    }
    return <QuoteForm isLoading={status == 'pending'} onAddQuote={handleQuoteData}/>
}

export default NewQuote
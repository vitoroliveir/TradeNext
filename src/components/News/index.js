
import {
    New,
    Card,
    List,
    Title,
    Content
} from "./styles"
import { isSafeHttpUrl } from "../../utils/url"

export default function news ({results}) {


    return(
        <New>
            <h1>Principais Assuntos</h1>
            <List>
                {results.filter((result) => isSafeHttpUrl(result?.url)).map((result) => (
                    <Card key={result.id || result.url}><Content href={result.url}><Title>{result.title}</Title></Content></Card>
                ))}
            </List>

        </New>
    )
}

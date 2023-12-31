import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { getPostsAll } from "../../services/request"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"


function Card(){

    const[forumTopics, setForumTopics] = useState([])
    const [loading, setLoading] = useState(true)

    const {selectedPostId} = useContext(GlobalStateContext)

    useEffect(() => {
        getPostsAll(setForumTopics)
    }, [])
  

    return(
        <>
        {selectedPostId ? (
            forumTopics
            .filter((titulo) => {
                titulo.post_title.toLowerCase()
                .include(selectedPostId.toLowerCase())})
            .map((item) => {
                <div key={item.post_id}>
                    <p>{item.creator_username}</p>
                </div>
            })
        ):(
            <div>
                {loading ? (
                    <div>
                        {forumTopics && forumTopics.map(dado =>{
                            return(
                                <div key={dado.post_id}>
                                    <img src={dado.post_image}/>
                                    <p>{dado.post_created_at}</p>
                                    <p>{dado.post_content}</p>
                                </div>    
                            )
                        })}
                    </div>
                ):(
                    <p>loading...</p>
                )}
            </div>
        )}
        </>
    )
}

export default Card


// function Card(props){

//     const [novoArray, loading, errorUsuario] = useRequestData('post')

//     return(
//         <>
//             {errorUsuario && <p>Error na requisicao, aguarde!</p>}
//             {!loading? (<div>
//                 {novoArray && novoArray.map(dado =>{
//                     <div key={dado.creator_id}>
//                         <p>{dado.creator_name}</p>
//                     </div>
//                 })}
//             </div>):(<p>loading...</p>)}
//         </>
//     )
// }

// export default Card
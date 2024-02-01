import React, { useState } from 'react'
import "./process.css"
import Header from '../../component/header/header'

function Process() {

    const [title,setTitle]= useState("1. Empathize");
    const [para,setPara]= useState("Deep user empathy is essential at the beginning of every project. We use a curated list of research methodologies customized to the needs of each project.");

    function handleText( title, para){
        setTitle(title)
        setPara(para)
    }

    return (
        <div className='process-container' >
            <div className='process-width-container' >
                <Header first_word="O" first_letter="ur" second_word="P" second_letter="rocess" />
                <div className='process-flex' >
                    <div className='process-bg-img' >
                        <div className='process-img-container'>
                            <img src='../../image/logo.png' />
                        </div>
                    </div>
                    <div className='process-content' >
                        <div className='process-nav' >
                            <h2
                             onClick={()=>handleText("1. Empathize","Deep user empathy is essential at the beginning of every project. We use a curated list of research methodologies customized to the needs of each project.")}
                            >Empathize</h2>
                            <h2
                            onClick={()=>handleText("2. discuss"," We discuss with client about project to develop them according to client requirement and this part is very special for us because we create memories with client as a project")}
                            >Discuss</h2>
                            <h2
                            onClick={()=>handleText("3. Develop"," We have a Experienced developing team We develop project with full concentration and security because our client is our first priority ")}
                            >Develop</h2>
                            <h2
                             onClick={()=>handleText("4. Test","Our testing process is very unique first we host the site then start testing with live result if we found any bug we fix them under 12 hours.")}
                            >Test</h2>
                        </div>
                        <div className='process-text' >
                            <h1>{title}</h1>
                            <p>{para}</p>
                            <button>
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
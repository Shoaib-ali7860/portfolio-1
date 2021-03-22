const qualification=[
    {
        "type":"Language",
        "c":"70",
        "l":"C",
        "level":"Intermediate"
        
        
        },
        {
            "type":"Language",
            "c":"70",
            "l":"Java",
            "level":"Intermediate"
            
            },
            {
                "type":"Language",
                "c":"70",
                "l":"Python",
                "level":"Intermediate"
                
                
                },
                {"type":"Language",
                    "c":"60",
                    "l":"Android",
                    "level":"Intermediate"
                    
                    
                    },
                    {"type":"Language",
                        "c":"75",
                        "l":"HTML",
                        "level":"Intermediate"
                        
                        
                        },
                        {"type":"Language",
                            "c":"70",
                            "l":"CSS",
                            "level":"Intermediate"
                            
                            
                            },
                            {"type":"Subject",
                                "c":"70",
                                "l":"DBMS",
                                "level":"Intermediate"
                                
                                
                                },
                                {"type":"Language",
                                    "c":"75",
                                    "l":"MySql",
                                    "level":"Intermediate"
                                    
                                    
                                    },
                                    {"type":"Subject",
                                        "c":"70",
                                        "l":"Data Structure",
                                        "level":"Intermediate"
                                        
                                        
                                        },
                                        {"type":"Language",
                                            "c":"40",
                                            "l":"Node.js",
                                            "level":"Beginner"
                                            
                                            
                                            },
                                            {"type":"Language",
                                                "c":"60",
                                                "l":"next.js",
                                                "level":"Intermediate"
                                                
                                                
                                                },
                                                {"type":"Language",
                                                    "c":"60",
                                                    "l":"MongoDb",
                                                    "level":"Intermediate"
                                                    
                                                    
                                                    }
    ]
    
    
    export default ()=>{
    return (
        <div id="language" className="container justify-item-center" style={{textAlign:"center"}}> 
        <div>
    
            <h1 className="mt-5 tColor">Languages And Subjects</h1>
            <p className="tColor">This gives an overview of academic subjects</p>
        </div>
        <div className="ggrid p-4">
        {qualification.map((qual)=>{
    return (<div className="container background m-1 p-4"  >
        <img src="apple-books.png"/>
    <div className="row h5 pl-4" >
        {qual.type}:  {qual.l}

    </div>
    <div className="progress">
    <div class="progress-bar" role="progressbar" style={{width: `${qual.c}%`}} aria-valuenow={qual.c} aria-valuemin="0" aria-valuemax="100">{qual.c}%</div>
 </div>
<div className="row h5 pl-4" >
       Level:  {qual.level}

    </div>
    
    </div>)
    
        }
        
        
        )}</div>
        </div>
    )
    
    }
const qualification=[
{
    "head":"Internship",
    "org":"Company Name: Centilytics InfoTech Pvt Ltd",
    "per":"Duration:4weeks(Android)",
    "year":"Completion Year:2020"
    
    
    },
    {
        "head":"B.TECH 4TH YEAR & UPTO 6TH SEMESTER (COMPUTER SCIENCE)",
        "org":"Educational Institute: IMS Engineering College Ghaziabad UTTER PRADESH",
        "per":"Percentage/CGPA: 8.3 CGPA",
        "year":"Completion Year: 2021"
        
        
        },
        {
            "head":"(10+2)TH CBSE",
            "org":"Educational Institute:Green Field Public School Sanjay Nagar Ghaziabad",
            "per":"Percentage: 78",
            "year":"Year: 2017"
            
            
            },
            {
                "head":"(10)TH UP Board",
                "org":"Educational Institute: MIU Inter College Vill. Dotai(Hapur U.P)",
                "per":"Percentage: 79.4",
                "year":"Year: 2015"
                
                
                }
]


export default ()=>{
return (
    <div id="qualification" className="container justify-item-center" style={{textAlign:"center"}}> 
    <div>

        <h1 className="mt-5 tColor">Academic Qualifications</h1>
        <p className="tColor">This is the summary that gives an overview of my career so far</p>
    </div>
    <div className="ggrid p-4">
    {qualification.map((qual)=>{
return (<div class="container background m-1 p-4" style={{maxWidth:"300px" }} >
<div class="" >
 <img src="apple-books.png"/>

</div>
<div class="  ">
 <h6>{qual.head}</h6>
 
</div>
<div class="">
 <small>{qual.org}</small>
 
</div>
<div class="  text-truncate">
 <small>{qual.per}</small>
 
</div>
<div class="text-truncate">
 <small>{qual.year}</small>
 
</div>
</div>)

    }
    
    
    )}</div>
    </div>
)

}
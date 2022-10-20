
//***************** IW_Conversions *************//
const iw_Conversions  = {
    
    G10_Windows:        'G10~Windows',
    G11_Windows_ES:     'G11~Windows~ES',
	
    G20_Doors:          'G20~Doors',	
    G21_Doors_ES:       'G21~Doors~ES',
		
    G50_Commercials:    'G50~Commercials',
    G51_Commercials_ES: 'G51~Commercials~ES',
        
    unknown: 'G00~Unknown'    
}


//***************** Windows *************//
const iw_db_Windows =  {    
    
    allDeals : [
            { id: 10006, name: "Fence New customer", discountStr: "Paint Free",  discount: 1000 },
            { id: 10010, name: "Fence Plus Gates",  discountStr: "Installation Free",  discount: 1500 },
            { id: 10011, name: "Fence Plus Gate 2+($3,000 Off Deal)",  discountStr: "$3,000",  discount: 3000 },
            { id: 10012, name: "Handrail New customer",  discountStr: "Paint Free",  discount: 1000 },
            { id: 10013, name: "Handrail Plus StairCase",  discountStr: "Installation Free",  discount: 15400 },
            { id: 10014, name: "Handrail Plus StairCase 2+",  discountStr: "Installation Free",  discount: 4500 },
            { id: 10015, name: "10+ of any ($5,000 Off Deal)", discountStr: "$5,000",  discount: 5000 },
    ], // allDeals
    
    DealItemTemplate :  { 
                    "ID": "0",
                    "Color": "",
					"Filter": "Fences",
                    "Name": "Fences and Gates",
                    "NameShort": "Fences",
                    "PicsM": "lwg-service-fencegates.jpg",
                    "Pics1": "pr305-www-demo-1.jpg",
                    "Pics2": "pr305-www-demo-2.jpg",
                    "Pics3": "pr305-www-demo-3.jpg",
                    "Desc1": "",                  
                    "Desc2": "Fences & Gates",
                    "Desc3": "",
                    "Desc4": "Free Custom Price Estimate",
                    "Price": "", 
                    "PriceOff": "1000", 
                    "Was": "999",
                    "Discount": "25% Off",   
                    
                    "DealOff": "",
                    "DealDetails": ""
                }, // DealTemplate
      
   DealItems  : [                   
                { 
                    "ID": "10006",					
                    "Name": "New Customer (Now <strong>$1,000</strong> Off)",
                    "PicsM": "lwg-service-fencegates.jpg",
                    "Desc1": "<strong>Any Color</strong>",                    
                    "Desc3": "<strong>Save $1,000</strong> (Limited Time Deal)",
                    
                    "DealOff": "$2,000",
                    "DealDetails": "Long Fence Deal ($1,000 Off)"
                },    
                { 
					"ID": "10012",                    
                    "Name": "Full (Now  <strong>$1,500</strong> Off)",
                    "PicsM": "lwg-service-owl-1.jpg",
                    
                    "Desc1": "<strong>Full</strong>",
                    "Desc3": "<strong>Free Installation</strong> (Limited Time Deal)",
                                        
                    "DealOff": "$1,500",
                    "DealDetails": "Fence with Gate deal ($1,500 Off)"
                }, 
                { 
                    "ID": "10014",					
                    "Color": "deal",
                    
                    "Name": "Plus(Now <strong>$3,000</strong> Off)",
                    "PicsM": "lwg-service-owl-2.jpg",
                    
                    "Desc1": "<strong>More is more deals</strong>",                    
                    "Desc3": "<strong>Save $3,000</strong> (Limited Time Deal)",                                        
                    
                    "DealOff": "$3,000",
                    "DealDetails": "Full fence plus 2 +Gates($3,000 Off)"
                }
       
          ] // deals
    
    
} // iw_db_Windows


//***************** Doors *************//
const iw_db_Doors =  {
    
    allDeals : [
            { id: 20001, name: "Simple Staircase ($500 Off Deal)", discountStr: "$500",    discount: 500 },
            { id: 20002, name: "Simple Handrail ($500 Off Deal)",  discountStr: "$500",  discount: 500 },
            { id: 20003, name: "Staircase Pluss handrail ($700 Off Deal)",  discountStr: "$700",  discount: 700 },
           
    ],
    
    DealItemTemplate :  { 
                    "ID": "0",
                    "Color": "",
					"Filter": "Staircase",
                    "Name": "Staircase and handrail",
                    "NameShort": "Staircase",
                    "PicsM": "lwg-service-handrail-deal-01.jpg",
                    "Pics1": "pr305-www-demo-1.jpg",
                    "Pics2": "pr305-www-demo-2.jpg",
                    "Pics3": "pr305-www-demo-3.jpg",
                    "Desc1": "",                  
                    "Desc2": "Any Color",
                    "Desc3": "",
                    "Desc4": "Free Custom Estimate",
                    "Price": "", 
                    "PriceOff": "1000", 
                    "Was": "999",
                    "Discount": "25% Off",   
                    
                    "DealOff": "",
                    "DealDetails": ""
                }, // DealTemplate
      
      
   DealItems  : [                   
            { 
                "ID": "20001",					
                "Name": "Simple Staircase (<strong>$500</strong> Off)",
                "PicsM": "lwg-service-staircase.jpg",
                "Desc1": "<strong>Any</strong> Material",                    
                "Desc3": "<strong>Save $500</strong> (Limited Time Deal)",

                "DealOff": "$500",
                "DealDetails": "1 Impact Doors Deal ($500 Off)"
            },    
            { 
                "ID": "20002",                    
                "Name": "Simple Handrail (<strong>$500</strong> Off)",
                "PicsM": "lwg-service-handrail.jpg",

                "Desc1": "<strong>Any</strong> Material",
                "Desc3": "<strong>Save $500</strong> (Limited Time Deal)",

                "DealOff": "$500",
                "DealDetails": "2 Impact Doors Deal ($500 Off)"
            }, 
            { 
                "ID": "20005",					
                "Color": "deal",

                "Name": "Staircase Plus Handrail",
                "PicsM": "lwg-service-handrail-deal-01.jpg",

                "Desc1": "<strong>Any</strong> material",                    
                "Desc3": "<strong>Free Installation</strong> (Limited Time Deal)",                                        

                "DealOff": "$700",
                "DealDetails": "Staircase Plus handrail ($700 Off)"
            }
       
     ] // deals
    
}

//***************** Commercial *************//
const iw_db_Commercials  =  {
    
    allDeals : [
            { id: 20001, name: "1 Impact Door ($500 Off Deal)", discountStr: "$500",    discount: 500 },
            { id: 20002, name: "2 Impact Doors ($1,000 Off Deal)",  discountStr: "$1,000",  discount: 1000 },
            { id: 20003, name: "3 Impact Doors ($1,500 Off Deal)",  discountStr: "$1,500",  discount: 1500 },
            { id: 20004, name: "4 Impact Doors ($2,000 Off Deal)",  discountStr: "$2,000",  discount: 2000 },
            { id: 20005, name: "5+ Impact Doors ($2,500 Off Deal)",  discountStr: "$2,500",  discount: 2500 }
            
    ],
    
    DealItemTemplate :  { },
    DealItems :  { },
        
}

  

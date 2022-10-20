//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

  function initServiceList() {
      
            //console.log(`.******************************************* initServiceList *******************************************`);			
      
            if (IWinList.length==0) { return -1; }            
            var hasCommon = (IWinListCommon !== undefined && (IWinListCommon.ID !== undefined || IWinListCommon.Name !== undefined) );
            
            var doDebug = false;            
                        
            console.log(`iw813.${pageSettings.client}.Page.Service [ ${pageSettings.service} ] - Here-We-Go... STARTED!`);			
            console.log(`-------------------------------------------`);                        
            
            // <div class="col-lg-4 col-11 p-2 dataServiceItem">				            
            // <div class="service-item-box Opacity0">
            const htmlTemplate = $('div.dataServiceItem').parent().html().replace(/opacity\s*[:]\s*0/gi,'opacity:1'); 
            
            $('div.dataServiceItem').remove();            
            
            // <div class="row justify-content-center dataServiceList">            
            var $dataServiceList = $('div.dataServiceList');
            
            var wowDelay = 0;            
            var totalItems = 0;
            
            
            var itemList = $();
            // Store all the card nodes
            IWinList.forEach(function(item, i) {
                var htmlItem = `${htmlTemplate}`;
                
                totalItems++;
                //console.log(`=====> ${totalItems}`);			
                
                //TODO: ID ????? autogenerate
                
                if (item.Color == undefined) item.Color = (hasCommon && IWinListCommon.Color !== undefined) ? IWinListCommon.Color : '';                
                if (item.Filter == undefined) item.Filter = (hasCommon && IWinListCommon.Filter !== undefined) ? IWinListCommon.Filter : "all";
                                                
                if (item.Name == undefined) item.Name = (hasCommon && IWinListCommon.Name !== undefined) ? IWinListCommon.Name : "Name";
                if (item.NameShort == undefined) item.NameShort = item.Name;
                
                if (item.Desc1 == undefined) item.Desc1 = (hasCommon && IWinListCommon.Desc1 !== undefined) ? IWinListCommon.Desc1 : "-";
                if (item.Desc2 == undefined) item.Desc2 = (hasCommon && IWinListCommon.Desc2 !== undefined) ? IWinListCommon.Desc2 : "-";
                if (item.Desc3 == undefined) item.Desc3 = (hasCommon && IWinListCommon.Desc3 !== undefined) ? IWinListCommon.Desc3 : "-";
                if (item.Desc4 == undefined) item.Desc4 = (hasCommon && IWinListCommon.Desc4 !== undefined) ? IWinListCommon.Desc4 : "-";
                
                if (item.Price == undefined) item.Price = (hasCommon && IWinListCommon.Price !== undefined) ? IWinListCommon.Price : "0";
                if (item.Was == undefined) item.Was = (hasCommon && IWinListCommon.Was !== undefined) ? IWinListCommon.Was : "0";
                if (item.Discount == undefined) item.Discount = (hasCommon && IWinListCommon.Discount !== undefined) ? IWinListCommon.Discount : "-f";
                
                if (item.DealOff == undefined) item.DealOff = (hasCommon && IWinListCommon.DealOff !== undefined) ? IWinListCommon.DealOff : "";
                if (item.DealDetails == undefined) item.DealDetails = (hasCommon && IWinListCommon.DealDetails !== undefined) ? IWinListCommon.DealDetails : "";
                                
                //console.log(`${i} = ${item.Name} === ${IWinListCommon.Pics1} === ${item.Pics1}`);			
                if (item.PicsM == undefined) item.PicsM = (hasCommon && IWinListCommon.PicsM !== undefined) ? IWinListCommon.PicsM : "nopicture.jpj";
                if (item.Pics1 == undefined) item.Pics1 = (hasCommon && IWinListCommon.Pics1 !== undefined) ? IWinListCommon.Pics1 : item.PicsM;
                if (item.Pics2 == undefined) item.Pics2 = (hasCommon && IWinListCommon.Pics2 !== undefined) ? IWinListCommon.Pics2 : item.PicsM;
                if (item.Pics3 == undefined) item.Pics3 = (hasCommon && IWinListCommon.Pics3 !== undefined) ? IWinListCommon.Pics3 : item.PicsM;                
                //console.log(`${i} = ${item.Name} === ${IWinListCommon.Pics1} === ${item.Pics1}`);			
                
                wowDelay++;                
                // var delayStr = (wowDelay % 3 == 1) ? 'delayp1' : (wowDelay % 3 == 2) ? 'delayp4' : 'delayp8';                
                // htmlItem = htmlItem.replace(/{@wowDelay}/gi,delayStr); //delayp1
                
                htmlItem = htmlItem.replace(/{@ID}/gi,item.ID); //{@ID}
                
                htmlItem = htmlItem.replace(/{@Title}/gi,item.Name); //{@Title}
                htmlItem = htmlItem.replace(/{@TitleShort}/gi,item.NameShort); //{@TitleShort}
                htmlItem = htmlItem.replace(/{@Desc1}/gi,item.Desc1); //{@Desc1}
                htmlItem = htmlItem.replace(/{@Desc2}/gi,item.Desc2); //{@Desc2}
                htmlItem = htmlItem.replace(/{@Desc3}/gi,item.Desc3); //{@Desc3}
                htmlItem = htmlItem.replace(/{@Desc4}/gi,item.Desc4); //{@Desc4}
                
                htmlItem = htmlItem.replace(/{@Price}/gi,item.Price); //{@Price}
                htmlItem = htmlItem.replace(/{@PriceWas}/gi,item.Was); //{@PriceWas}
                htmlItem = htmlItem.replace(/{@PriceDiscount}/gi,item.Discount); //{@PriceDiscount}
                
                htmlItem = htmlItem.replace(/{@DealOff}/gi,item.DealOff); //{@Price}
                
                //{@PicM} - {@Pic1} {@Pic2} {@Pic3} 
                htmlItem = htmlItem
                    .replace(/{@PicM}/gi,item.PicsM+'?v=2') 
                    .replace(/{@Pic1}/gi,item.Pics1+'?v=2') 
                    .replace(/{@Pic2}/gi,item.Pics2+'?v=2')
                    .replace(/{@Pic3}/gi,item.Pics3+'?v=2');                                  
                                
                //itemServiceHeader
                var itemRentalCSS = '';
                if (item.Color != undefined && item.Color.match(/deal/gi)) {
                    itemRentalCSS   = 'itemServiceHeaderDeal';                 
                    
                }                        
                //<div class="itemHeader itemServiceHeader"><h3>{@TitleShort}</h3></div>
                if (itemRentalCSS.length)
                        htmlItem = htmlItem.replace(/\s+itemServiceHeader/gi,' '+itemRentalCSS);
                
                var filterTag = '';                
                if (item.Filter.match(/window/gi)) { filterTag += " filterWindow"; } 
                if (item.Filter.match(/door/gi)) { filterTag += " filterDoor";} 
                if (item.Filter.match(/commercial/gi)) { filterTag  += " filterCommercial"; } 
                if (item.Filter.match(/blind/gi)) { filterTag += " filterBlind"; }                 
                if (filterTag.length)
                    htmlItem = htmlItem.replace(/{@filterTag}/gi,filterTag); // {@filterTag}
                                
                htmlItem = htmlItem.replace(/\s+d-none/gi,'');                
                
                var newHtml  = $(htmlItem);                
                if (doDebug) {
                    console.log(`-------------------------------------------`);			
                    console.log(`${i} = ${item.Name} === ${item}`);			
                    //console.log(`${i} = ${item.Name} === ${htmlItem}`);			
                    console.log(`-------------------------------------------`);			
                }
                
                //d-none                                
                                
                $dataServiceList.append(newHtml);              
                //cards = cards.add(createCard(item));
                
                //var detail = `$${item.Price} ${item.NameShort} (${item.Discount})`;
                //var detail = `${item.DealDetails}`;
                //console.log(`=======> ${detail}`);
                //addBookWindow(item.ID, detail);
                
            });
                    
      
            var dealCount = 0;            
            if (typeof pageSettings.langIsEspanish !== undefined  && pageSettings.langIsEspanish) {
                // Español
                
                addBookWindow(0, "No Ventanas / No Sé Aún");
                addBookDoor(0, "No Puertas / No Sé Aún");   
                
                iw_db_Windows.allDealsEs.forEach(function (deal) { addBookWindow(deal.id, `${deal.name}`); }); 
                iw_db_Doors.allDealsEs.forEach(function (deal) { addBookDoor(deal.id, `${deal.name}`); }); 
                
                addBookUrgency(0, "Inmediatamente. Estoy Listo(a)!");
                addBookUrgency(1, "En 1 Mes");
                addBookUrgency(3, "en 3 Meses");            
                addBookUrgency(9, "Todavia No Estoy Seguro(a)");                
            }
            else  {
                addBookWindow(0, "No Needed Now");       
                addBookDoor(0, "No Needed Now");       
                
                //console.log(`=======> ${dealCount++} ===> ${JSON.stringify(deal)}`);                
                iw_db_Windows.allDeals.forEach(function (deal) { addBookWindow(deal.id, `${deal.name}`); }); 
                iw_db_Doors.allDeals.forEach(function (deal) { addBookDoor(deal.id, `${deal.name}`); });
                
                addBookUrgency(0, "Immediattely. I am Ready!");
                addBookUrgency(1, "Within 1 Month");
                addBookUrgency(3, "Within 3 Months");            
                addBookUrgency(9, "I'm not sure yet");  
            }
            
             //$('div.dataServiceList').append(cards);
            console.log(`-------------------------------------------`);
            console.log(`iw813.${pageSettings.client}.Page.Service [ ${pageSettings.service} ] - Here-We-Go... DONE!`);			

} // initServiceList


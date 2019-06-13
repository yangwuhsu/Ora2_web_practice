
        //只能同方向移動
        // function init(){
        //     var list = document.getElementById('list');
        //     var prev = document.getElementById('prev');
        //     var next = document.getElementById('next');
        //     var container = document.getElementById('container');
        //     var sw = document.body.clientWidth;
        //     prev.addEventListener('click',click);
        //     next.addEventListener('click',click);
        //     list.style.left=0;
        //     list.style.right=0;
        //     var index = 0;
        //     function click(e){
        //         proBtnId = this.id;
        //         if(proBtnId === 'prev'){
        //             console.log("left");
        //             index++;
        //             if(index %3 ===1){
        //                 list.style.left= '-200%';
        //             }else if(index %3 === 2){
        //                 list.style.left = '-300%';
        //             }else if(index % 3 ===0){
        //                 list.style.left = "0";
        //             }
        //         }else{
        //             index++;
        //             if(index %3 ===1){
        //                 list.style.left = '-100%';
        //             }else if(index %3 === 2){
        //                 list.style.left = '-200%';
        //             }else if(index % 3 ===0){
        //                 list.style.left = "0";
        //             }
        //         }
                
        //     }
                    
        // }
        // window.addEventListener('load',init);
        function init(){
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var proOne = document.getElementById('proOne');
            var proTwo = document.getElementById('proTwo');
            var proThree = document.getElementById('proThree');
            prev.addEventListener('click',click);
            next.addEventListener('click',click);
            leftOne = proOne.style.left;
            console.log("a1:"+leftOne);
            leftTwo = proTwo.style.left;
            console.log("b1:"+leftTwo);
            leftThree = proThree.style.left;
            console.log("c1:"+leftThree);
           
            var index=0;
            function click(e){
                index++;
                proBtnId = this.id;
                console.log(proBtnId);
                if(proBtnId ==='next'){
                    if(index%3===1){
                        proOne.style.left = '0';
                        console.log("a2:"+proOne.style.left );
                        proTwo.style.left = '100%';
                        console.log("b2:"+proTwo.style.left );
                        proThree.style.zIndex = '-999';
                        console.log(proThree.style.zIndex );
                        proThree.style.left = '-100%';
                        console.log("c2:"+proThree.style.left );
                    }else if(index%3===2){
                        proOne.style.left = '100%';
                       

                        proThree.style.left = '0';
                        proTwo.style.left = '-100%';
                    }else if(index%3===0){
                        proOne.style.left = '-100%'; 
                        proTwo.style.left = '0';
                        proThree.style.left = '100%';
                    }
                }else if(proBtnId ==='prev'){
                    if(index%3===1){
                        proOne.style.left = '100%';
                        console.log("a2:"+proOne.style.left );
                        proTwo.style.left = '-100%';
                        console.log("b2:"+proTwo.style.left );
                        proThree.style.left = '0';
                        console.log("c2:"+proThree.style.left );
                    }else if(index%3===2){
                        proOne.style.left = '0';
                        proThree.style.left = '-100%';
                        proTwo.style.left = '100%';
                    }else if(index%3===0){
                        proOne.style.left = '-100%'; 
                        proTwo.style.left = '0';
                        proThree.style.left = '100%';
                    }
                }
                
            }
        }
        window.addEventListener('load',init);



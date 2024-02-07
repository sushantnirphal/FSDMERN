let a  = 1;
function x(){
    let b =4;
    console.log(a);
    function y(){
        let c = 5;
        console.log(b);
        function z(){
            let d =7;
            console.log(c);

        }
        z();
    }
    y();
}
x();

var expect = function(val) {
    return{
        toBe: function(other){
            if (other !== val){
                throw new Error("Not Equal");
            } else {
                return true;       
            }
        },
        notToBe: function(other){
            if (other === val){
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    }
};


try {
    expect(5).toBe(5); // true
    expect(5).notToBe(5); // throws "Equal"

} catch (e) {
    console.error(e);
}



/*
    Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

    Example:
    s There's-a-starman-waiting-in-the-sky
    k = 3
    The alphabet is rotated by 3, matching the mapping above. The encrypted string is Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb.

    Note: The cipher only encrypts letters: symbols, such as-. remain unencrypted.

    Input:
    abcdefghijklmnopqrstuvwxyz

    Output:
    defghijklmnopqrstuvwxyzabc
*/



function caesarCipher(s, k) {

    return s.split("").map( (letter) => {
        
        let letterCode = letter.charCodeAt(0)
        let cipherCode = letterCode + (k % 26)
        // console.log(letterCode, cipherCode)
        // descifro minuscula
        if(letterCode >= 97 && letterCode <= 122){ // 123
            letter = String.fromCharCode( (cipherCode > 122) ? ((cipherCode % 123) + 97) : cipherCode )
        }
        // descifro mayuscula
        if(letterCode >= 65 && letterCode <= 90){ 
            letter = String.fromCharCode( (cipherCode > 90) ? ((cipherCode % 91) + 65) : cipherCode )
        }
        
        return letter
    }).join("")
}

console.log(caesarCipher("okffng-Qwvb", 23)) // lhcckd-Ntsy
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 50)) // Yjuywq-Jmmi-ml-rfc-Zpgefr-Qgbc-md-Jgdc
console.log(caesarCipher("Pz-/aI/J`EvfthGH", 69)) // Gq-/rZ/A`VmwkyXY

// Consideraciones futuras
// array[i].charCodeAt(0) => obtener codigo
// String.fromCharCode(code) => obtener caracter
// minusculas => 97 (a) al 122 (z)
// mayusculas => 65 (A) al 90 (Z)

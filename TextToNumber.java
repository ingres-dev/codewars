import java.util.Arrays;
public class TextToNumber {
    static String alphabetPosition(String text) {
        String textoFormatado = text.toLowerCase();
        String[] textoRecebido = textoFormatado.split("");
        String[] alfabeto = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
        String numerosRetornados = "";
        int indice;

        for (int i = 0; i < textoRecebido.length; i++) {
            indice = Arrays.binarySearch(alfabeto, textoRecebido[i]);
            if (indice >= 0){
                numerosRetornados = numerosRetornados + (indice+1) + " ";
            }
        }
        if (numerosRetornados.length() > 0) {
            String resultado = numerosRetornados.substring(0, numerosRetornados.length() - 1);
            return resultado;
        }
        else{
            return "";
        }
    }
}
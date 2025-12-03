import java.util.Arrays;
public class Vowels {
	
	public static int getCount(String str) {
        String[] textoRecebido = str.split("");
        String[] alfabeto = {"a","e","i","o","u"};
        int vogais = 0;
        int indice;

        for (int i = 0; i < textoRecebido.length; i++) {
            indice = Arrays.binarySearch(alfabeto, textoRecebido[i]);
            if (indice >= 0){
                vogais++;
            }
        
        }
    return vogais;
	  }
}

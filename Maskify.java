public class Maskify {
    public static String maskify(String str) {
        String[] masked = str.split("");
        String novoTexto = "";
        for (int i = 0; i <= masked.length-5; i++){
            masked[i] = "#";
        }
        for (int i = 0; i <= masked.length-1; i++){
            novoTexto = novoTexto + masked[i];

        }
        return (novoTexto);
    }
}

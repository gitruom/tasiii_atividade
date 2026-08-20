function validarChamado(titulo: string): boolean {
    if (titulo.length < 5) {
        throw new Error("O título do chamado não pode ser menor que 5 caracteres.");
    }
    else if (titulo.length > 100) {
        throw new Error("O título do chamado não pode ser maior que 100 caracteres.");
    }

    return true;
}

export default validarChamado;
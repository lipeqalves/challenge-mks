import Swal from "sweetalert2";

export const Success = () => {
  Swal.fire({
    position: "center",
    title: "Sucesso!",
    text: "Item adicionado ao carrinho",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
};
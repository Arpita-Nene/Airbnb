import {create } from 'zustand';
interface RegisteModalStore{
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;

}
const useRegisterModal = create<RegisteModalStore>((set)=> ({
     isOpen : false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({isOpen: false}),
}));
export default useRegisterModal
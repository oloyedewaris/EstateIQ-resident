import * as Clipboard from 'expo-clipboard';
import { ToastLong } from '../helper/toast';

const copyToClipboard = async (str) => {
    await Clipboard.setStringAsync(str);
    ToastLong('Copied to clipboard')
};

export default copyToClipboard
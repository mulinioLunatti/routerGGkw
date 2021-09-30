import Delimiter from "@editorjs/delimiter";
import Quote from "@editorjs/quote";
import Header from "@editorjs/header";
import SimpleVideo from "simple-video-editorjs";
import SimpleImage from "@editorjs/simple-image";
import Embed from "@editorjs/embed";
// import LinkTool from "@editorjs/link";
import AttachesTool from "@editorjs/attaches";
import ImageTool from "@editorjs/image";
import API_CONSTANTS from '../constants/apiConstants'
// import SimpleVideo from 'simple-video-editorjs'
export const EDITOR_JS_TOOLS = {
    delimiter: Delimiter,
    quote: Quote,
    header: Header,
    SimpleVideo:SimpleVideo,
    SimpleImage: {
        class: SimpleImage,
        inlineToolbar: true,
        config: {
            placeholder: 'Paste image URL'
        }
    },
    embed: Embed,
    // linkTool: {
    //     class: LinkTool,
    //     config: {
    //         endpoint: API_CONSTANTS.BASEURL, // Your backend endpoint for url data fetching
    //     }
    // },
    attaches: {
        class: AttachesTool,
        config: {
            endpoint: `${API_CONSTANTS.BASEURL}/file/upload?credential=${localStorage.getItem('credential')}`
        }
    },
    // tools: {
    //     video: SimpleVideo,
    // },
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: `${API_CONSTANTS.BASEURL}/file/upload?credential=${localStorage.getItem('credential')}`, // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
        }
    }

}
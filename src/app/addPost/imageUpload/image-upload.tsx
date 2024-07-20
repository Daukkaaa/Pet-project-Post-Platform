'use client'

import { UploadButton, UploadDropzone } from "@/utils/uploadthing"
import { useState } from "react";
import Image from "next/image";

export default function ImageUpload() {
    const [imageUrl, setImageUrl] = useState('');

    function handleChange() {
        setImageUrl('')
    }

    return (
        <div>
            {imageUrl.length ? (
                <div>
                    <div className="post_img_con">
                        <Image
                            className="post_img"
                            src={imageUrl}
                            alt="user-image"
                            width={500}
                            height={350} />
                    </div>
                    <button style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '6px' }} onClick={handleChange}>
                        Delete
                    </button>
                </div>
            ) : (
                <UploadDropzone
                    appearance={{
                        container: {
                            border: 'none'
                        }
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        setImageUrl(res[0].url)
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            )}
        </div>
    )
}

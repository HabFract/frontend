// #region Global Imports
import React, { useState } from 'react'
import Upload from 'antd/lib/upload'
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload/interface'
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

// #region Interface Imports
import { IImageUploadInput } from './types'
// #endregion Interface Imports

export const ImageUploadInput: React.FC<IImageUploadInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  const [chosenFile, setChosenFile] = useState(null)
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === 'uploading') {
      // setLoading(true);
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj as RcFile, url => {
      //   setLoading(false);
      //   setImageUrl(url);
      // });
    }
  }

  return (
    <Upload
      listType="picture-card"
      showUploadList={true}
      beforeUpload={() => false}
      maxCount={1}
      {...props}
      onChange={handleChange}
    >
      Test
      {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
    </Upload>
  )
}

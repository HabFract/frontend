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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons/lib/icons'
// #endregion Interface Imports

export const ImageUploadInput: React.FC<IImageUploadInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [chosenFile, setChosenFile] = useState(null)
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    // Update Formik context
    form.setFieldValue(field.name, chosenFile)
    form.setFieldTouched(field.name, true)
    console.log('info.file :>> ', info.file)
    if (info.file.status === 'uploading') {
      // setLoading(true);
      return
    }
    if (info.file.status === 'done') {
      console.log('info.file :>> ', info.file)
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj as RcFile, url => {
      //   setLoading(false);
      //   setImageUrl(url);
      // });
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Upload
      listType="picture-card"
      accept="image/png, image/jpeg"
      showUploadList={true}
      beforeUpload={() => false}
      maxCount={1}
      {...props}
      onChange={handleChange}
    >
      {chosenFile ? (
        <img src={chosenFile} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

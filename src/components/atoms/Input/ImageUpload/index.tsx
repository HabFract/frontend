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
  const [fileList, setFileList] = useState<any>([])

  const handlePreview: UploadProps['onPreview'] = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    console.log('image :>> ', image)
  }

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    // Update Formik context
    form.setFieldValue(field.name, chosenFile)
    form.setFieldTouched(field.name, true)

    if (info.file.status === 'uploading') {
      // setLoading(true);
      return
    }
    console.log('info.file :>> ', info.file)
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj as RcFile, url => {
      //   setLoading(false);
      //   setImageUrl(url);
      // });
    }
    setFileList([...info.fileList])
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
      maxCount={1}
      showUploadList={true}
      fileList={fileList}
      beforeUpload={() => false}
      {...props}
      onChange={handleChange}
      onPreview={handlePreview}
    >
      {chosenFile ? (
        <img src={chosenFile} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

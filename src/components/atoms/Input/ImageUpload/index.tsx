// #region Global Imports
// #endregion Local Imports
// #region Interface Imports
import { IImageUploadInput } from './types'
// #endregion Global Imports
// #region Local Imports
import { getBase64 } from '@/app/utils/resizeExportAsPng'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons/lib/icons'
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload/interface'
import Upload from 'antd/lib/upload'
import React, { useState } from 'react'

// #endregion Interface Imports

export const ImageUploadInput: React.FC<IImageUploadInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [chosenFile, setChosenFile] = useState(null)
  const [fileList, setFileList] = useState<any>([])

  const handleChange: UploadProps['onChange'] = async (
    info: UploadChangeParam<UploadFile>,
  ) => {
    let fileString
    try {
      fileString = await getBase64(info.file.originFileObj as Blob)
    } catch (error) {
      console.error(error)
    }
    // TODO handle error better for user

    setChosenFile(fileString)
    // Update Formik context
    form.setFieldValue('avatar', fileString)
    form.setFieldTouched('avatar', true)

    if (info.file.status === 'uploading') {
      setLoading(true)
      return
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
      customRequest={({ file, onSuccess }) =>
        setTimeout(() => {
          onSuccess!('ok')
        }, 0)
      }
      listType="picture-card"
      accept="image/png, image/jpeg"
      maxCount={1}
      showUploadList={true}
      fileList={fileList}
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

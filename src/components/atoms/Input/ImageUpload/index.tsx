// #region Global Imports
import React, { useState } from 'react'
// #endregion Global Imports

// #region Local Imports
import { getBase64 } from '@/app/utils/resizeExportAsPng'
import { Upload } from 'antd'
// #endregion Local Imports

// #region Interface Imports
import type { UploadProps } from 'antd'
import { IImageUploadInput } from './types'
import { ColoredSvg } from '../..'
// #endregion Interface Imports

export const ImageUploadInput: React.FC<IImageUploadInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [chosenFile, setChosenFile] = useState(form.values.avatar || null)
  const [fileList, setFileList] = useState<any>([])
  // console.log('field :>> ', [form.values.avatar])
  const handleChange: UploadProps['onChange'] = async (info: any) => {
    let fileString
    try {
      fileString = await getBase64(info.file.originFileObj as Blob)
    } catch (error) {
      console.error(error)
    }
    // TODO handle error better for user

    console.log('field :>> ', fileString)
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
    <div data-testid="image-upload">
      {loading ? (
        <ColoredSvg
          iconName="loading-outline"
          rounded={false}
          className={'h-6 w-6'}
        />
      ) : (
        <ColoredSvg iconName="add-file" rounded={false} className={'h-6 w-6'} />
      )}
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

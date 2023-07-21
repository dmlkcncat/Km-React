import Yup from './validation'

export const CommentSchema = Yup.object().shape({
  userName: Yup.string().required(),
  title: Yup.string().required(),
  comment: Yup.string().required(),
})

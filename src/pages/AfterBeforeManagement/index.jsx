import BeforeAfterImageSlider from './BeforeAfterImageSlider'

const index = () => {
  //   const beforeImageUrl = 'url_to_before_image'
  //   const afterImageUrl = 'url_to_after_image'
  const beforeImageUrl = '/afterbefore/before.jpg'
  const afterImageUrl = '/afterbefore/after.jpg'

  return (
    <div>
      <BeforeAfterImageSlider
        beforeImage={beforeImageUrl}
        afterImage={afterImageUrl}
        width={600}
        height={600}
      />
    </div>
  )
}
export default index

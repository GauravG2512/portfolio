import React from 'react'
import PropTypes from "prop-types";

const SkillCard = (
   { imgSrc,label,desc,classes }
) => {
  return (
    <div className={'flex items-center gap-5 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover-animation-cards ' + classes}>
      <figure className=" flex items-center justify-centerrounded-lg size-10 lg:size-20 bg bg-zinc-700/50 rounded-lg overflow-hidden p-2 group-hover:bg-zinc-900">
<img src={imgSrc} alt={label}/>

      </figure>
      <div className="">
        <b className='text-xs sm:text-sm md:text-base text-white'>{label}</b>
        <p className="subtext">{desc}</p>
      </div>
    </div>
  )
}
SkillCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
                classes: PropTypes.string.isRequired,
}
export default SkillCard

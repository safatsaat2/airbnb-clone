import HeartButton from '../Button/HeartButton'

const Card = ({room}) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={room.image}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg'>{room.location}</div>
        <div className='font-semibold text-sm'>{room.category}</div>
        <div className='font-light text-neutral-500'>
        {room.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room.price}</div>
          <div className='font-light'>night</div>
          
        </div>
        <div className='grid grid-cols-2 justify-between gap-y-2 items-center '>
          <p className='text-[10px]'>Bed: {room.bed}</p>
          <p className='text-[10px]'>Bedroom: {room.bedroom}</p>
          <p className='text-[10px]'>Bathroom: {room.bathroom}</p>
          <p className='text-[10px]'>Types of Places: {room.type}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Card
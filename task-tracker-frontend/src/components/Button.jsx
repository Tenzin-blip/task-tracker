const Button = ({type, onClick}) => {
  const baseClasses='text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2'

  const styles = {
    add: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-500',
    delete: 'bg-red-500 hover:bg-red-700 focus:ring-red-500',
  }
  return (
    <button
      className={`${baseClasses} ${styles[type] || styles.add}`}
      onClick={onClick}
      type='button'
    >
      {type === 'delete' ? 'Delete Button' : 'Add Button'}
    </button>
  )
}

export default Button

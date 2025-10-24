import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../../store/reducers/favoritesSlice';

function FavoritesList() {
    const dispatch = useDispatch();
    const { favoritesProducts } = useSelector((state) => state.favorites);
    console.log(favoritesProducts);

    let total = 0;
    for (let i = 0; i < favoritesProducts.length; i++) {
        total += favoritesProducts[i].price * favoritesProducts[i].quantity;
    }
    total = total.toFixed(2);

    return (
        <div className='custom-container flex lg:flex-row flex-col lg:items-start items-center justify-center gap-10 py-10'>
            <div className='overflow-x-auto w-full'>
                <table className='min-w-[40rem] w-full'>
                    <tr className='bg-[#F9F1E7]'>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'></th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Product</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'>Price</th>
                        <th className='border-spacing-2 p-3 font-semibold text-base text-left'></th>
                    </tr>
                    {
                        favoritesProducts.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td className='border-spacing-2 py-3 text-base'>
                                        <Link to={`/${product.id}`}>
                                            <img src={product.images[0]} className='w-[6rem] h-[6rem] object-contain bg-[#F9F1E7] rounded-md' alt="" />
                                        </Link>
                                    </td>
                                    <td className='border-spacing-2 p-3 text-base'>{product.title}</td>
                                    <td className='border-spacing-2 p-3 text-base'>{product.price}$</td>
                                    <td className='border-spacing-2 p-3 text-base'>
                                        <DeleteIcon className='text-xl text-[#B88E2F] cursor-pointer'  onClick={() => dispatch(removeFromFavorites(product.id))}/>
                                    </td>
                                </tr>)
                        })

                    }


                </table>
            </div>

        </div>
    )
}

export default FavoritesList
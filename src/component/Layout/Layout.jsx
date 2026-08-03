import Header from '../Header/Header'
import Sidebar from '../Sidebar/sidebar';
import './Layout.css';

export default function Layout({children})
{
    return(
        <div className='baseLayout'>
            <Header />
            <div className="bodyLayout">
                <Sidebar />
                <main className='mainContent'>
                    {children}
                </main>
            </div>
        </div>
    )
}

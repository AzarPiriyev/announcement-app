import React, { useEffect, useState } from 'react';
import MainContainer from '../common/mainContainer';
import Modal from '../common/Modal'; // Modal bileşenini import ediyoruz

const Account = () => {
  const [products, setProducts] = useState([]); // Ürünleri tutmak için state
  const userEmail = localStorage.getItem('email'); // Giriş yapan kullanıcının e-posta adresini al
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal kontrolü için state
  const [selectedProduct, setSelectedProduct] = useState(null); // Düzenlenecek ürün için state

  // Ürünleri JSON Server'dan çekme
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/son');
        const data = await response.json();
        const userProducts = data.filter(product => product.userEmail === userEmail); // Kullanıcının ürünlerini filtrele
        setProducts(userProducts); // Sadece o kullanıcının ürünlerini state'e set et
      } catch (error) {
        console.error('Ürünler yüklenirken hata oluştu:', error);
      }
    };

    fetchProducts(); // sayfa yüklendiğinde ürünleri çek
  }, [userEmail]);

  // Düzenleme modalını açma fonksiyonu
  const handleEdit = (product) => {
    setSelectedProduct(product); // Seçilen ürünü state'e set et
    setIsModalOpen(true); // Modalı aç
  };

  // Modal'daki formu yönetmek için input değişikliklerini işleme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value }); // Seçilen ürünü güncelle
  };

  // Ürün düzenleme formunu gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ürünü güncelleme
    await fetch(`http://localhost:3000/son/${selectedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedProduct),
    });

    // Modalı kapat ve sayfayı yeniden yükle
    setIsModalOpen(false);
    window.location.reload(); // Değişiklik sonrası sayfayı yenile
  };

  return (
    <MainContainer>
      <div className='px-[25px] bg-[#f1f3f7]'>
        <div className='py-[20px] flex justify-between'>
          <p className='text-[#000000] text-[26px] font-bold'>Kabinetim</p>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className='w-[220px] border rounded-[10px]'>
                <img src={product.image} alt={product.title} className='w-full h-[200px] object-cover' />
                <div className='py-[10px] px-[10px]'>
                  <p className='text-[18px] font-bold text-[#000000]'>{product.price} Azn</p>
                  <p className='truncate text-[16px] font-normal text-[#212c3a]'>{product.title}</p>
                </div>
                <div className='py-[10px] px-[10px]'>
                  <button 
                    onClick={() => handleEdit(product)} // Edit butonuna tıklanınca modal açılır
                    className='bg-[#ff4f08] text-white py-1 px-3 rounded-lg font-semibold hover:bg-[#ff6f30] transition duration-300'
                  >
                    Düzenle
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Henüz eklediğiniz bir ürün yok.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <label>Başlık:</label>
            <input 
              type="text" 
              name="title" 
              value={selectedProduct?.title || ''} 
              onChange={handleChange} 
              className='border-2 p-2 rounded-md'
            />
            
            <label>Fiyat:</label>
            <input 
              type="text" 
              name="price" 
              value={selectedProduct?.price || ''} 
              onChange={handleChange} 
              className='border-2 p-2 rounded-md'
            />
            
            <label>Resim URL:</label>
            <input 
              type="text" 
              name="image" 
              value={selectedProduct?.image || ''} 
              onChange={handleChange} 
              className='border-2 p-2 rounded-md'
            />
            
            <button 
              type="submit" 
              className='bg-[#ff4f08] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#ff6f30] transition duration-300'>
              Kaydet
            </button>
          </div>
        </form>
      </Modal>
    </MainContainer>
  );
};

export default Account;

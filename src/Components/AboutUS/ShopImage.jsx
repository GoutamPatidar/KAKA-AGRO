import React from 'react'
import './ShopImage.css'
function ShopImage() {
    return (
        <>



            <main>
                <div class="container">
                    <div id="gallery" class="photos-grid-container gallery">
                        <div class="main-photo img-box">
                            <img src="\assets\images\shop1.jpeg" alt="image" />
                        </div>
                        <div>
                            <div class="sub">
                                <div class="img-box"><img src="\assets\images\shop1.jpeg" alt="image" /></div>
                                <div class="img-box"><img src="\assets\images\shop3.jpeg" alt="image" /></div>
                                <div class="img-box"><img src="\assets\images\shop4.jpeg" alt="image" /></div>
                                <div id="multi-link" class="img-box">
                                    <img src="\assets\images\Shop5.jpeg" alt="image" />
                                    <div class="transparent-box">
                                        <div class="caption">
                                            +3
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div id="more-img" class="extra-images-container hide-element">
                            <a href="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&h=1200&q=80" class="glightbox" data-glightbox="type: image"><img src="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&h=900&q=60" alt="image" /></a>
                            <a href="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHx3b21lbiUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&h=1200&q=80" class="glightbox" data-glightbox="type: image"><img src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHx3b21lbiUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&h=900&q=60" alt="image" /></a>
                            <a href="https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=1200&q=80" class="glightbox" data-glightbox="type: image"><img src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=900&q=80" alt="image" /></a>

                        </div> */}
                    </div>
                </div>
            </main >


        </>
    )
}

export default ShopImage


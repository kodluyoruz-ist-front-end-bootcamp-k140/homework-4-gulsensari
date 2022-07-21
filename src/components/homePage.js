import React from "react";

export default function HomePage() {
    return(<>
       <div class="text-center">
      <img
        src="https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png"
        alt=""
        class="rounded"
      />
      <div class="text1 text-center">
        Merhaba, <strong><span id="myName"></span></strong> Hoş geldiniz!
      </div>
      <div class="text2 text-center">
        <strong>Kodluyoruz İstanbul Frontend Web Development Bootcamp</strong>'inin
         4. Ödevindesiniz.
      </div>
    </div>
    </>
    )
}
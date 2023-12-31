// ClientSection.js
import React from 'react';

function ClientSection() {
  return (
    <section className="ClientBlock_section__i1KO6" id="homeClientsWidget">
      <div className="container">
        <div className="row ClientBlock_head_wrap__kI9gn">
          <div className="col-lg-5">
            <h2 className="ttl-80 fw-regular mb-1 mb-lg-2 mb-lg-0">Clients</h2>
          </div>
          <div className="col-lg-7">
            <p className="fw-light mb-0 lh-primary ClientBlock_description__9J6yI">
              Our clients are everything to us; so are we to them.
            </p>
          </div>
        </div>
        <div className="row row-cols-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ClientBlock_client_wrap__JuK6s">
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46856_34bbb1887c.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46562_a14b3b9cd2.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46633_2_32b4bc89a4.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46756_77ffb18613.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46759_41345411a8.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46761_fa33d53bbe.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46763_538a604da9.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46764_cec26c4743.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46769_57deee812f.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46772_f618c3f243.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46804_f7c0c18fd5.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46853_1f6af22209.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46856_34bbb1887c.svg" />
          <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/Group_46876_193b0a12cb.svg" />
          {/* <ClientLogo imgAlt="IKEA" imgSrc="https://admin.wac.co/uploads/" /> */}
          {/* Add more ClientLogo components for other clients */}
        </div>
        <div className="text-center ClientBlock_btn_wrapper__XivU8">
          <a className="btn btn-primary light" href="/our-clients">
            <span>View all clients</span>
            <span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 1538 1024"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ imgAlt, imgSrc }) {
  return (
    <div>
      <div className="ratio ClientBlock_client_img__SI8Mw">
        <img
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          src={imgSrc}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
      </div>
    </div>
  );
}

export default ClientSection;

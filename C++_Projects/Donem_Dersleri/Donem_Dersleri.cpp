#include <iostream>;


class Arayuz {
public:
    virtual void hangiDerslerVar() = 0;
};


class ilkokul : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "Ýlkokulda hayat bilgisi, matematik ve türkçe dersleri vardýr." << std::endl;
    }
};

class ortaokul : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "Ortaokulda fen,  matematik, sosyal bilgiler, ingilizce, türkçe, beden eðitimi dersleri vardýr" << std::endl;
    }
};

class lise : public Arayuz {
public:
    void Arayuz::hangiDerslerVar() {
        std::cout << "Lisede coðrafya, fizik, kimya, biyoloji, inkýlap tarihi, matematik, beden eðitimi, din kültürü, edebiyat dersleri vardýr" << std::endl;
    }
};

int main() {
    std::locale::global(std::locale(""));

    ilkokul ogrenci1;
    ogrenci1.hangiDerslerVar();

    ortaokul ogrenci2;
    ogrenci2.hangiDerslerVar();

    lise ogrenci3;
    ogrenci3.hangiDerslerVar();
}


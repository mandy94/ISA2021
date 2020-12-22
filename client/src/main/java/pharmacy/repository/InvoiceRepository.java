package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long>{

}

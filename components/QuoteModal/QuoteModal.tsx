import React, { useEffect, useState } from 'react';

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialForm = { name: '', phone: '', email: '', city: '' };

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Vui lòng nhập họ tên.';
    if (!/^(0|\+84)[3-9][0-9]{8}$/.test(form.phone)) return 'Số điện thoại không hợp lệ.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Email không hợp lệ.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setSubmitting(true);
    // Placeholder submit. Hook up to API or form service later.
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      alert('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm.');
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <button className="modal-close" aria-label="Đóng" onClick={onClose}>×</button>
        <div className="modal-header">
          <h3>BÁO GIÁ & DÙNG THỬ NGAY!</h3>
          <div className="modal-badge">Chi 10s – Nhận demo toàn bộ tính năng</div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            className="modal-input"
            name="name"
            placeholder="Họ tên đầy đủ *"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="modal-input"
            name="phone"
            placeholder="Số điện thoại *"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="modal-input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="modal-input"
            name="city"
            placeholder="Tỉnh/ Thành phố"
            value={form.city}
            onChange={handleChange}
          />

          {error && <div className="modal-error">{error}</div>}

          <button className="btn btn-primary modal-submit" type="submit" disabled={submitting}>
            {submitting ? 'Đang gửi...' : 'Nhận báo giá & Demo miễn phí'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;



const initialData = {
  storeName: 'NGD CONCEPT',
  instagram: '@ngdconceptbh',
  city: 'Belo Horizonte, MG',
  monthlyGoal: 45000,
  notificationsRead: false,
  clients: [
    {
      id: 'c1',
      name: 'Gabriel Henrique',
      tier: 'Gold',
      phone: '(31) 99841-2210',
      email: 'gabriel.h@email.com',
      city: 'Belo Horizonte, MG',
      notes: 'Plano VIP ativo. Veste G nas camisetas Oversized e 42 nas calças cargo.',
      since: '2023'
    },
    {
      id: 'c2',
      name: 'Lucas Matheus Oliveira',
      tier: 'Plano VIP',
      phone: '(31) 99120-8450',
      email: 'lucas.matheus@email.com',
      city: 'Nova Lima, MG',
      notes: 'Sempre compra lançamentos de drops exclusivos via PIX.',
      since: '2024'
    },
    {
      id: 'c3',
      name: 'Rafael Drummond',
      tier: 'Gold',
      phone: '(11) 98812-3090',
      email: 'rafael.drummond@email.com',
      city: 'São Paulo, SP',
      notes: 'Envio SEDEX. Prefere peças pretas e conjuntos street.',
      since: '2024'
    },
    {
      id: 'c4',
      name: 'Matheus Costa',
      tier: 'Cliente',
      phone: '(31) 98409-1172',
      email: 'matheus.costa@email.com',
      city: 'Contagem, MG',
      notes: 'Retirada em Belo Horizonte.',
      since: '2025'
    }
  ],
  products: [
    { id: 'p1', name: 'Camiseta Oversized NGD Gold', sku: 'NGD-101', price: 219.90, cost: 78.00, stock: 16, minStock: 5, size: 'M / G / GG' },
    { id: 'p2', name: 'Conjunto Street Concept', sku: 'NGD-204', price: 489.90, cost: 195.00, stock: 3, minStock: 5, size: 'M / G' },
    { id: 'p3', name: 'Calça Cargo Tailored Preta', sku: 'NGD-309', price: 329.90, cost: 130.00, stock: 11, minStock: 5, size: '38 ao 44' },
    { id: 'p4', name: 'Jaqueta Bomber NGD Limited', sku: 'NGD-402', price: 549.90, cost: 220.00, stock: 2, minStock: 4, size: 'G / GG' },
    { id: 'p5', name: 'T-Shirt Pima Cotton Signature', sku: 'NGD-115', price: 189.90, cost: 64.00, stock: 24, minStock: 6, size: 'P / M / G' },
    { id: 'p6', name: 'Boné NGD Bordado Dourado', sku: 'NGD-501', price: 149.90, cost: 45.00, stock: 19, minStock: 5, size: 'Único' }
  ],
  sales: [
    {
      id: '#1084',
      clientId: 'c1',
      date: 'Hoje, 13:45',
      paymentMethod: 'PIX',
      installments: 1,
      discount: 0,
      total: 709.80,
      items: [
        { productId: 'p2', name: 'Conjunto Street Concept', qty: 1, price: 489.90 },
        { productId: 'p1', name: 'Camiseta Oversized NGD Gold', qty: 1, price: 219.90 }
      ]
    },
    {
      id: '#1083',
      clientId: 'c2',
      date: 'Hoje, 11:10',
      paymentMethod: 'Cartão de Crédito',
      installments: 3,
      discount: 0,
      total: 879.80,
      items: [
        { productId: 'p4', name: 'Jaqueta Bomber NGD Limited', qty: 1, price: 549.90 },
        { productId: 'p3', name: 'Calça Cargo Tailored Preta', qty: 1, price: 329.90 }
      ]
    },
    {
      id: '#1082',
      clientId: 'c3',
      date: 'Ontem, 18:20',
      paymentMethod: 'PIX',
      installments: 1,
      discount: 20,
      total: 599.70,
      items: [
        { productId: 'p1', name: 'Camiseta Oversized NGD Gold', qty: 2, price: 219.90 },
        { productId: 'p5', name: 'T-Shirt Pima Cotton Signature', qty: 1, price: 179.90 }
      ]
    },
    {
      id: '#1081',
      clientId: 'c1',
      date: '17 Out, 16:05',
      paymentMethod: 'Cartão de Débito',
      installments: 1,
      discount: 0,
      total: 479.80,
      items: [
        { productId: 'p3', name: 'Calça Cargo Tailored Preta', qty: 1, price: 329.90 },
        { productId: 'p6', name: 'Boné NGD Bordado Dourado', qty: 1, price: 149.90 }
      ]
    }
  ],
  cashflow: [
    { id: 'cf1', type: 'in', title: 'Pedido #1084 — Gabriel Henrique', category: 'Venda • PIX', amount: 709.80, date: 'Hoje, 13:45' },
    { id: 'cf2', type: 'in', title: 'Pedido #1083 — Lucas Matheus', category: 'Venda • Crédito 3x', amount: 879.80, date: 'Hoje, 11:10' },
    { id: 'cf3', type: 'out', title: 'Envios Correios / SEDEX Nacional', category: 'Logística', amount: 185.00, date: 'Ontem, 17:00' },
    { id: 'cf4', type: 'in', title: 'Pedido #1082 — Rafael Drummond', category: 'Venda • PIX', amount: 599.70, date: 'Ontem, 18:20' },
    { id: 'cf5', type: 'out', title: 'Fornecedor Malharia Premium', category: 'Produção', amount: 640.00, date: '17 Out' }
  ],
  crmLeads: [
    { id: 'l1', name: 'Gabriel Henrique', tag: 'Gold', phone: '(31) 99841-2210', value: 980.00, status: 'Reservou Drop Novo', action: 'Confirmar tamanho G da Jaqueta Bomber' },
    { id: 'l2', name: 'Pedro Henrique BH', tag: 'Plano VIP', phone: '(31) 99311-4090', value: 489.90, status: 'Em Negociação', action: 'Aguardando link de pagamento Conjunto Street' },
    { id: 'l3', name: 'Thiago Mendes (SP)', tag: 'Envio Brasil', phone: '(11) 97612-8800', value: 659.80, status: 'Cotação Frete', action: 'Enviar código de rastreio após confirmação' }
  ],
  academy: [
    { title: 'Posicionamento de Marca e Peças Exclusivas', duration: '14 min', progress: 100, area: 'Branding' },
    { title: 'Atendimento Plano VIP e Conversão no Direct', duration: '18 min', progress: 70, area: 'Vendas' },
    { title: 'Gestão de Grade e Giro de Estoque na Moda', duration: '12 min', progress: 35, area: 'Estoque' }
  ],
  news: [
    { category: 'Coleção', title: 'Peças Oversized e conjuntos monocromáticos lideram pedidos no mês', date: 'Hoje', text: 'Clientes do Plano VIP responderam por 62% da saída das peças limitadas na primeira semana.' },
    { category: 'Operação', title: 'Envios para fora de MG cresceram 24% neste trimestre', date: 'Ontem', text: 'São Paulo, Rio de Janeiro e Brasília concentram o maior volume de pedidos nacionais.' }
  ]
};

const app = {
  state: JSON.parse(localStorage.getItem('ngd_concept_state_v4')) || initialData,
  currentScreen: 'dashboard',
  dashboardPeriod: '7d',
  salesFilter: 'Todas',
  searchQuery: '',
  cart: [],
  selectedClientForSale: 'c1',
  selectedPaymentMethod: 'PIX',
  selectedInstallments: 1,
  saleDiscount: 0,

  init() {
    const savedTheme = localStorage.getItem('ngd_theme') || 'black-gold';
    this.setTheme(savedTheme, false);
    this.updateBadges();
    this.navigate('dashboard');
  },

  setTheme(themeName, notify = true) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('ngd_theme', themeName);
    const btnBlack = document.getElementById('btnThemeBlack');
    const btnWhite = document.getElementById('btnThemeWhite');
    if (btnBlack && btnWhite) {
      btnBlack.classList.toggle('active', themeName === 'black-gold');
      btnWhite.classList.toggle('active', themeName === 'white-gold');
    }
    if (notify) {
      this.showToast(themeName === 'black-gold' ? 'Tema Preto & Dourado' : 'Tema Branco & Dourado');
    }
  },

  toggleThemeQuick() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'black-gold' ? 'white-gold' : 'black-gold';
    this.setTheme(next, true);
    if (this.currentScreen === 'ajuste') this.navigate('ajuste');
  },

  saveState() {
    localStorage.setItem('ngd_concept_state_v4', JSON.stringify(this.state));
    this.updateBadges();
  },

  resetData() {
    localStorage.removeItem('ngd_concept_state_v4');
    this.state = JSON.parse(JSON.stringify(initialData));
    this.showToast('Dados da loja restaurados');
    this.updateBadges();
    this.navigate('dashboard');
  },

  formatBRL(val) {
    return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },

  getTotalRevenue() {
    return this.state.sales.reduce((acc, s) => acc + s.total, 0);
  },

  getFinancialAnalytics() {
    let baseRevenue = 0;
    let baseCostCMV = 0;
    let baseTaxes = 0;
    let totalUnitsSold = 0;

    const feeRates = {
      'PIX': 0.009,
      'Cartão de Débito': 0.019,
      'Cartão de Crédito': 0.048,
      'Dinheiro': 0.0
    };

    const salesToAnalyze = this.dashboardPeriod === 'hoje'
      ? this.state.sales.filter(s => s.date.startsWith('Hoje') || s.date === 'Agora')
      : this.state.sales;

    salesToAnalyze.forEach(sale => {
      baseRevenue += sale.total;
      const rate = feeRates[sale.paymentMethod] !== undefined ? feeRates[sale.paymentMethod] : 0.03;
      baseTaxes += sale.total * (0.04 + rate);

      sale.items.forEach(item => {
        const prod = this.state.products.find(p => p.id === item.productId);
        const unitCost = prod ? prod.cost : item.price * 0.38;
        baseCostCMV += unitCost * item.qty;
        totalUnitsSold += item.qty;
      });
    });

    const multiplier = this.dashboardPeriod === '30d' ? 12 : 1;
    const revenue = baseRevenue * multiplier;
    const cmv = baseCostCMV * multiplier;
    const taxes = baseTaxes * multiplier;
    const grossProfit = Math.max(0, revenue - cmv);
    const netProfit = Math.max(0, revenue - cmv - taxes);

    const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
    const netMarginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    const cmvPct = revenue > 0 ? (cmv / revenue) * 100 : 0;
    const taxPct = revenue > 0 ? (taxes / revenue) * 100 : 0;

    const roiPct = cmv > 0 ? (netProfit / cmv) * 100 : 0;
    const markup = cmv > 0 ? revenue / cmv : 0;
    const ordersCount = salesToAnalyze.length * multiplier;
    const avgTicket = ordersCount > 0 ? revenue / ordersCount : 0;

    const productProfitability = this.state.products.map(p => {
      const unitTax = p.price * 0.065;
      const unitNetProfit = p.price - p.cost - unitTax;
      const unitMarginPct = (unitNetProfit / p.price) * 100;
      const unitRoiPct = (unitNetProfit / p.cost) * 100;
      return {
        ...p,
        unitNetProfit,
        unitMarginPct,
        unitRoiPct
      };
    }).sort((a, b) => b.unitMarginPct - a.unitMarginPct);

    return {
      revenue,
      cmv,
      taxes,
      grossProfit,
      netProfit,
      grossMarginPct,
      netMarginPct,
      cmvPct,
      taxPct,
      roiPct,
      markup,
      ordersCount,
      totalUnitsSold: totalUnitsSold * multiplier,
      avgTicket,
      productProfitability
    };
  },

  getClientStats() {
    const map = {};
    this.state.clients.forEach(c => {
      map[c.id] = { ...c, totalSpent: 0, ordersCount: 0, salesHistory: [] };
    });
    this.state.sales.forEach(s => {
      if (map[s.clientId]) {
        map[s.clientId].totalSpent += s.total;
        map[s.clientId].ordersCount += 1;
        map[s.clientId].salesHistory.push(s);
      }
    });
    return Object.values(map).sort((a, b) => b.totalSpent - a.totalSpent);
  },

  updateBadges() {
    const lowStockCount = this.state.products.filter(p => p.stock <= p.minStock).length;
    const totalAlerts = this.state.notificationsRead ? lowStockCount : lowStockCount + 1;
    const badge = document.getElementById('notifBadgeCount');
    if (badge) {
      badge.textContent = totalAlerts;
      badge.style.display = totalAlerts > 0 ? 'flex' : 'none';
    }

    const prodTag = document.getElementById('drawerProductsCount');
    if (prodTag) prodTag.textContent = `${this.state.products.length} peças`;

    const currentMonth = this.getTotalRevenue() + 34200;
    const pct = Math.min(100, Math.round((currentMonth / this.state.monthlyGoal) * 100));
    const goalBadge = document.getElementById('drawerGoalBadge');
    if (goalBadge) goalBadge.textContent = `${pct}%`;
  },

  openNotificationsModal() {
    const lowStock = this.state.products.filter(p => p.stock <= p.minStock);
    const latestSale = this.state.sales[0];

    document.getElementById('genericModalTitle').textContent = 'Notificações e Alertas';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="section-bar" style="margin-bottom:4px">
        <span class="section-heading">Alertas Ativos (${lowStock.length + 1})</span>
        <button class="link-gold" onclick="app.markNotificationsRead()">Marcar lidas</button>
      </div>

      <div class="list-stack">
        ${lowStock.map(p => `
          <div class="row-card clickable" onclick="app.closeGenericModal(); app.navigate('produtos')">
            <div class="avatar-box" style="color:var(--danger);border-color:var(--danger)">!</div>
            <div class="row-main">
              <strong>Estoque Baixo: ${p.name}</strong>
              <span>Restam ${p.stock} un. na grade (${p.size})</span>
            </div>
            <div class="row-side">
              <span class="tag tag-danger">Repor</span>
            </div>
          </div>
        `).join('')}

        ${latestSale ? `
          <div class="row-card clickable" onclick="app.closeGenericModal(); app.openSaleDetailModal('${latestSale.id}')">
            <div class="avatar-box">R$</div>
            <div class="row-main">
              <strong>Venda Confirmada (${latestSale.id})</strong>
              <span>${latestSale.paymentMethod} • ${latestSale.date}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(latestSale.total)}</strong>
            </div>
          </div>
        ` : ''}

        <div class="row-card clickable" onclick="app.closeGenericModal(); app.navigate('crm')">
          <div class="avatar-box">VIP</div>
          <div class="row-main">
            <strong>Follow-up Plano VIP</strong>
            <span>Gabriel Henrique reservou peça do drop</span>
          </div>
          <div class="row-side">
            <span class="tag tag-gold">CRM</span>
          </div>
        </div>
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  markNotificationsRead() {
    this.state.notificationsRead = true;
    this.saveState();
    this.closeGenericModal();
    this.showToast('Notificações marcadas como lidas');
  },

  toggleDrawer() {
    document.getElementById('sideDrawer').classList.toggle('open');
    document.getElementById('drawerBackdrop').classList.toggle('open');
  },

  closeDrawer() {
    document.getElementById('sideDrawer').classList.remove('open');
    document.getElementById('drawerBackdrop').classList.remove('open');
  },

  showToast(msg) {
    const container = document.getElementById('toastContainer');
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  },

  navigate(screen) {
    this.currentScreen = screen;
    this.closeDrawer();

    document.querySelectorAll('.bottom-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.bottom === screen);
    });
    document.querySelectorAll('.drawer-link').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screen);
    });
    document.querySelectorAll('.jump-btn[data-pres]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.pres === screen);
    });

    const headers = {
      dashboard: ['NGD CONCEPT • BH', 'Dashboard'],
      vendas: ['HISTÓRICO COMERCIAL', 'Vendas'],
      fluxo: ['FINANCEIRO', 'Fluxo de Caixa'],
      ajuste: ['PREFERÊNCIAS', 'Ajustes'],
      clientes: ['CARTEIRA VIP & GOLD', 'Clientes'],
      produtos: ['ESTOQUE DE PEÇAS', 'Produtos'],
      crm: ['RELACIONAMENTO', 'CRM & Plano VIP'],
      metas: ['DESEMPENHO MENSAL', 'Metas'],
      precificacao: ['MARGEM & MARKUP', 'Precificação'],
      academy: ['TREINAMENTO', 'Academy'],
      news: ['COMUNICADOS', 'News'],
      ajuda: ['SUPORTE', 'Ajuda']
    };

    const [sub, title] = headers[screen] || ['NGD CONCEPT', 'Gestão'];
    document.getElementById('headerSubtitle').textContent = sub;
    document.getElementById('headerTitle').textContent = title;

    const vp = document.getElementById('appViewport');
    vp.scrollTop = 0;

    switch (screen) {
      case 'dashboard': vp.innerHTML = this.renderDashboard(); break;
      case 'vendas': vp.innerHTML = this.renderVendas(); break;
      case 'fluxo': vp.innerHTML = this.renderFluxo(); break;
      case 'clientes': vp.innerHTML = this.renderClientes(); break;
      case 'produtos': vp.innerHTML = this.renderProdutos(); break;
      case 'crm': vp.innerHTML = this.renderCRM(); break;
      case 'metas': vp.innerHTML = this.renderMetas(); break;
      case 'precificacao':
        vp.innerHTML = this.renderPrecificacao();
        this.recalcPricing();
        break;
      case 'academy': vp.innerHTML = this.renderAcademy(); break;
      case 'news': vp.innerHTML = this.renderNews(); break;
      case 'ajuda': vp.innerHTML = this.renderAjuda(); break;
      case 'ajuste': vp.innerHTML = this.renderAjuste(); break;
    }
  },

  /* ==================== 1. DASHBOARD LIMPO E ALINHADO ==================== */
  renderDashboard() {
    const fin = this.getFinancialAnalytics();
    const topClient = this.getClientStats()[0];

    return `
      <!-- Barra de Período Segmented Control + Botão Venda -->
      <div class="period-bar">
        <div class="segmented-control">
          ${[
            { id: 'hoje', label: 'Hoje' },
            { id: '7d', label: '7 Dias' },
            { id: '30d', label: '30 Dias' }
          ].map(p => `
            <button class="seg-btn ${this.dashboardPeriod === p.id ? 'active' : ''}"
                    onclick="app.dashboardPeriod='${p.id}'; app.navigate('dashboard')">
              ${p.label}
            </button>
          `).join('')}
        </div>
        <button class="btn-outline" style="border-color:var(--gold);color:var(--gold)" onclick="app.openNewSaleModal()">
          + Nova Venda
        </button>
      </div>

      <!-- Card Principal: Receita, Lucro Líquido, Margem e ROI -->
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Faturamento Bruto</span>
          <span class="tag tag-gold">${fin.ordersCount} pedidos • ${fin.totalUnitsSold} peças</span>
        </div>
        <div class="summary-value">${this.formatBRL(fin.revenue)}</div>
        <div class="summary-grid">
          <div class="summary-col">
            <span>Lucro Líquido</span>
            <strong style="color:var(--gold)">${this.formatBRL(fin.netProfit)}</strong>
          </div>
          <div class="summary-col">
            <span>Margem Líq.</span>
            <strong style="color:var(--success)">${fin.netMarginPct.toFixed(1)}%</strong>
          </div>
          <div class="summary-col">
            <span>Ticket Médio</span>
            <strong>${this.formatBRL(fin.avgTicket)}</strong>
          </div>
        </div>
      </div>

      <!-- Grade 2x2 Limpa: Rentabilidade (ROI), Margem Bruta, CMV e Taxas -->
      <div class="analytics-kpi-grid">
        <div class="analytics-kpi-box gold-highlight">
          <span class="kpi-label">Rentabilidade (ROI)</span>
          <div class="kpi-box-val" style="color:var(--gold)">+${fin.roiPct.toFixed(1)}%</div>
          <span class="kpi-box-sub">Markup médio: ${fin.markup.toFixed(2)}x</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Margem Bruta</span>
          <div class="kpi-box-val">${fin.grossMarginPct.toFixed(1)}%</div>
          <span class="kpi-box-sub">Lucro bruto: ${this.formatBRL(fin.grossProfit)}</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Custo Peças (CMV)</span>
          <div class="kpi-box-val">${this.formatBRL(fin.cmv)}</div>
          <span class="kpi-box-sub">${fin.cmvPct.toFixed(1)}% do faturamento</span>
        </div>

        <div class="analytics-kpi-box">
          <span class="kpi-label">Impostos &amp; Taxas</span>
          <div class="kpi-box-val" style="color:var(--danger)">${this.formatBRL(fin.taxes)}</div>
          <span class="kpi-box-sub">${fin.taxPct.toFixed(1)}% sobre vendas</span>
        </div>
      </div>

      <!-- Composição da Margem (Lista Vertical Limpa sem Quebra) -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Composição da Receita (DRE)</span>
          <button class="link-gold" onclick="app.navigate('precificacao')">Simular →</button>
        </div>
        <div class="dre-bar-stack">
          <div class="dre-segment-profit" style="width:${fin.netMarginPct}%"></div>
          <div class="dre-segment-cost" style="width:${fin.cmvPct}%"></div>
          <div class="dre-segment-tax" style="width:${fin.taxPct}%"></div>
        </div>
        <div class="dre-rows">
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--gold)"></span>
              Lucro Líquido Real
            </span>
            <span class="dre-row-right" style="color:var(--gold)">
              ${this.formatBRL(fin.netProfit)} (${fin.netMarginPct.toFixed(1)}%)
            </span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--text-muted)"></span>
              Custo de Mercadoria (CMV)
            </span>
            <span class="dre-row-right">
              ${this.formatBRL(fin.cmv)} (${fin.cmvPct.toFixed(1)}%)
            </span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">
              <span class="dre-dot" style="background:var(--danger)"></span>
              Impostos &amp; Taxas de Cartão
            </span>
            <span class="dre-row-right" style="color:var(--danger)">
              ${this.formatBRL(fin.taxes)} (${fin.taxPct.toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>

      <!-- Gráfico Receita vs Lucro -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Receita vs. Lucro (7 dias)</span>
          <span style="font-size:11px;color:var(--gold);font-weight:600;white-space:nowrap">■ Lucro Líquido</span>
        </div>
        <div class="chart-bars">
          ${[
            { d: 'Ter', rev: 52, prof: 29 },
            { d: 'Qua', rev: 68, prof: 38 },
            { d: 'Qui', rev: 58, prof: 31 },
            { d: 'Sex', rev: 86, prof: 49 },
            { d: 'Sáb', rev: 94, prof: 54 },
            { d: 'Dom', rev: 74, prof: 42 },
            { d: 'Hoje', rev: 98, prof: 56 }
          ].map(b => `
            <div class="chart-col">
              <div class="chart-track-dual">
                <div class="chart-fill-rev" style="height:${b.rev}%"></div>
                <div class="chart-fill-profit" style="height:${b.prof}%"></div>
              </div>
              <span>${b.d}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Rentabilidade por Peça -->
      <div class="card">
        <div class="section-bar">
          <span class="section-heading">Rentabilidade por Peça</span>
          <button class="link-gold" onclick="app.navigate('produtos')">Estoque →</button>
        </div>
        <div class="list-stack">
          ${fin.productProfitability.slice(0, 4).map(p => `
            <div class="row-card clickable" onclick="app.navigate('produtos')">
              <div class="row-main">
                <strong>${p.name}</strong>
                <span>Margem Líq: ${p.unitMarginPct.toFixed(1)}% • ROI: +${p.unitRoiPct.toFixed(0)}%</span>
              </div>
              <div class="row-side">
                <strong style="color:var(--gold)">+${this.formatBRL(p.unitNetProfit)}</strong>
                <span>lucro / un.</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Top Cliente Gold -->
      ${topClient ? `
        <div class="card">
          <div class="section-bar">
            <span class="section-heading">Top Cliente Gold</span>
            <button class="link-gold" onclick="app.navigate('clientes')">Ver Todos →</button>
          </div>
          <div class="row-card clickable" onclick="app.openClientModal('${topClient.id}')">
            <div class="avatar-box">1º</div>
            <div class="row-main">
              <strong>${topClient.name}</strong>
              <span>${topClient.tier} • ${topClient.ordersCount} pedidos • ${topClient.city}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(topClient.totalSpent)}</strong>
              <span>Histórico</span>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  },

  renderSaleRow(sale) {
    const client = this.state.clients.find(c => c.id === sale.clientId);
    const clientName = client ? client.name : 'Venda Balcão';
    const summary = sale.items.map(i => `${i.qty}x ${i.name}`).join(', ');
    return `
      <div class="row-card clickable" onclick="app.openSaleDetailModal('${sale.id}')">
        <div class="avatar-box">${sale.id}</div>
        <div class="row-main">
          <strong>${clientName}</strong>
          <span>${summary}</span>
          <span style="color:var(--gold);font-weight:600">${sale.paymentMethod}${sale.installments > 1 ? ` ${sale.installments}x` : ''} • ${sale.date}</span>
        </div>
        <div class="row-side">
          <strong>${this.formatBRL(sale.total)}</strong>
          <span>Recibo</span>
        </div>
      </div>
    `;
  },

  /* ==================== 2. VENDAS ==================== */
  getFilteredSales() {
    return this.state.sales.filter(s => {
      const matchMethod = this.salesFilter === 'Todas' || s.paymentMethod === this.salesFilter;
      const client = this.state.clients.find(c => c.id === s.clientId);
      const hay = `${s.id} ${client ? client.name : ''} ${s.items.map(i => i.name).join(' ')}`.toLowerCase();
      const matchQuery = !this.searchQuery || hay.includes(this.searchQuery.toLowerCase());
      return matchMethod && matchQuery;
    });
  },

  renderVendas() {
    const methods = ['Todas', 'PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];
    const filtered = this.getFilteredSales();
    const sum = filtered.reduce((a, b) => a + b.total, 0);

    return `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center">
        <div id="salesSummaryBox">
          <span class="summary-label">Volume (${filtered.length} pedidos)</span>
          <strong style="display:block;font-size:20px;color:var(--gold);margin-top:2px">${this.formatBRL(sum)}</strong>
        </div>
        <button class="btn-gold" style="width:auto;padding:9px 14px" onclick="app.openNewSaleModal()">+ Nova Venda</button>
      </div>

      <input class="input-box" placeholder="Buscar por cliente, peça ou pedido..." value="${this.searchQuery}" oninput="app.onSearchSales(this.value)" />

      <div class="filter-strip">
        ${methods.map(m => `
          <button class="filter-btn ${this.salesFilter === m ? 'active' : ''}" onclick="app.salesFilter='${m}';app.navigate('vendas')">${m}</button>
        `).join('')}
      </div>

      <div class="list-stack" id="salesListContainer">
        ${filtered.length ? filtered.map(s => this.renderSaleRow(s)).join('') : `<div class="card">Nenhum pedido encontrado.</div>`}
      </div>
    `;
  },

  onSearchSales(query) {
    this.searchQuery = query;
    const filtered = this.getFilteredSales();
    const sum = filtered.reduce((a, b) => a + b.total, 0);
    const summaryBox = document.getElementById('salesSummaryBox');
    const listContainer = document.getElementById('salesListContainer');
    if (summaryBox) {
      summaryBox.innerHTML = `
        <span class="summary-label">Volume (${filtered.length} pedidos)</span>
        <strong style="display:block;font-size:20px;color:var(--gold);margin-top:2px">${this.formatBRL(sum)}</strong>
      `;
    }
    if (listContainer) {
      listContainer.innerHTML = filtered.length
        ? filtered.map(s => this.renderSaleRow(s)).join('')
        : `<div class="card">Nenhum pedido encontrado.</div>`;
    }
  },

  openSaleDetailModal(saleId) {
    const sale = this.state.sales.find(s => s.id === saleId);
    if (!sale) return;
    const client = this.state.clients.find(c => c.id === sale.clientId);

    let saleCost = 0;
    sale.items.forEach(i => {
      const p = this.state.products.find(x => x.id === i.productId);
      saleCost += (p ? p.cost : i.price * 0.38) * i.qty;
    });
    const saleNetProfit = sale.total - saleCost - (sale.total * 0.055);
    const saleMargin = (saleNetProfit / sale.total) * 100;

    document.getElementById('genericModalTitle').textContent = `Pedido ${sale.id}`;
    document.getElementById('genericModalBody').innerHTML = `
      <div class="card">
        <div class="dre-rows">
          <div class="dre-row">
            <span class="dre-row-left">Cliente</span>
            <span class="dre-row-right">${client ? client.name : 'Balcão'}</span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">Data</span>
            <span class="dre-row-right">${sale.date}</span>
          </div>
          <div class="dre-row">
            <span class="dre-row-left">Pagamento</span>
            <span class="tag tag-gold">${sale.paymentMethod}${sale.installments > 1 ? ` (${sale.installments}x)` : ''}</span>
          </div>
          <div class="dre-row" style="padding-top:6px;border-top:1px solid var(--border-line)">
            <span class="dre-row-left">Lucro Líquido</span>
            <span class="dre-row-right" style="color:var(--success)">${this.formatBRL(saleNetProfit)} (${saleMargin.toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      <span class="section-heading">Peças do Pedido</span>
      <div class="list-stack">
        ${sale.items.map(i => `
          <div class="row-card">
            <div class="row-main">
              <strong>${i.name}</strong>
              <span>${i.qty} un. × ${this.formatBRL(i.price)}</span>
            </div>
            <strong>${this.formatBRL(i.qty * i.price)}</strong>
          </div>
        `).join('')}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--border-line)">
        <span style="font-size:13px;font-weight:600">Total Faturado</span>
        <strong style="font-size:18px;color:var(--gold)">${this.formatBRL(sale.total)}</strong>
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  /* ==================== 3. CADASTRAR VENDAS ==================== */
  openNewSaleModal(clientId = null) {
    if (clientId) this.selectedClientForSale = clientId;
    if (this.cart.length === 0 && this.state.products.length > 0) {
      this.cart = [{ productId: this.state.products[0].id, qty: 1 }];
    }
    this.renderNewSaleModalContent();
    document.getElementById('saleModalOverlay').classList.add('open');
  },

  closeNewSaleModal() {
    document.getElementById('saleModalOverlay').classList.remove('open');
  },

  renderNewSaleModalContent() {
    let subtotal = 0;
    let totalCost = 0;
    this.cart.forEach(item => {
      const p = this.state.products.find(x => x.id === item.productId);
      if (p) {
        subtotal += p.price * item.qty;
        totalCost += p.cost * item.qty;
      }
    });
    const total = Math.max(0, subtotal - (Number(this.saleDiscount) || 0));
    const estProfit = Math.max(0, total - totalCost - (total * 0.055));
    const estMargin = total > 0 ? (estProfit / total) * 100 : 0;

    const methods = ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];

    document.getElementById('saleModalBody').innerHTML = `
      <div class="field-group">
        <label>Cliente</label>
        <select class="select-box" onchange="app.selectedClientForSale = this.value">
          ${this.state.clients.map(c => `
            <option value="${c.id}" ${c.id === this.selectedClientForSale ? 'selected' : ''}>
              ${c.name} (${c.tier})
            </option>
          `).join('')}
        </select>
      </div>

      <div class="field-group">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <label>Peças Selecionadas</label>
          <button class="link-gold" onclick="app.addCartItem()">+ Adicionar peça</button>
        </div>
        <div class="list-stack" style="margin-top:4px">
          ${this.cart.map((item, idx) => {
            const prod = this.state.products.find(p => p.id === item.productId) || this.state.products[0];
            return `
              <div class="row-card" style="padding:8px;gap:8px">
                <select class="select-box" style="padding:7px;font-size:12px;flex:1" onchange="app.cart[${idx}].productId=this.value;app.renderNewSaleModalContent()">
                  ${this.state.products.map(p => `
                    <option value="${p.id}" ${p.id === item.productId ? 'selected' : ''}>
                      ${p.name} (${this.formatBRL(p.price)})
                    </option>
                  `).join('')}
                </select>
                <div class="stepper">
                  <button class="step-btn" onclick="app.updateCartQty(${idx}, -1)">-</button>
                  <strong style="font-size:12.5px;min-width:16px;text-align:center">${item.qty}</strong>
                  <button class="step-btn" onclick="app.updateCartQty(${idx}, 1)">+</button>
                </div>
                <strong style="font-size:12px;min-width:64px;text-align:right">${this.formatBRL(prod.price * item.qty)}</strong>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="field-group">
        <label>Forma de Pagamento</label>
        <div class="pay-grid">
          ${methods.map(m => `
            <div class="pay-tile ${this.selectedPaymentMethod === m ? 'selected' : ''}" onclick="app.selectedPaymentMethod='${m}';app.renderNewSaleModalContent()">
              ${m}
            </div>
          `).join('')}
        </div>
      </div>

      ${this.selectedPaymentMethod === 'Cartão de Crédito' ? `
        <div class="field-group">
          <label>Parcelamento</label>
          <select class="select-box" onchange="app.selectedInstallments=Number(this.value);app.renderNewSaleModalContent()">
            ${[1, 2, 3, 4, 6].map(n => `
              <option value="${n}" ${this.selectedInstallments === n ? 'selected' : ''}>
                ${n}x de ${this.formatBRL(total / n)} sem juros
              </option>
            `).join('')}
          </select>
        </div>
      ` : ''}

      <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
        <div>
          <span class="summary-label">Total a Receber</span>
          <strong style="display:block;font-size:20px;color:var(--gold)">${this.formatBRL(total)}</strong>
          <span style="font-size:11px;color:var(--success)">Lucro Líq: ${this.formatBRL(estProfit)} (${estMargin.toFixed(0)}%)</span>
        </div>
        <button class="btn-gold" style="width:auto;padding:11px 20px" onclick="app.confirmNewSale()">Concluir Venda</button>
      </div>
    `;
  },

  addCartItem() {
    this.cart.push({ productId: this.state.products[0].id, qty: 1 });
    this.renderNewSaleModalContent();
  },

  updateCartQty(idx, delta) {
    this.cart[idx].qty += delta;
    if (this.cart[idx].qty <= 0) this.cart.splice(idx, 1);
    if (this.cart.length === 0) this.cart.push({ productId: this.state.products[0].id, qty: 1 });
    this.renderNewSaleModalContent();
  },

  confirmNewSale() {
    let subtotal = 0;
    const items = [];
    this.cart.forEach(cItem => {
      const p = this.state.products.find(x => x.id === cItem.productId);
      if (!p) return;
      p.stock = Math.max(0, p.stock - cItem.qty);
      subtotal += p.price * cItem.qty;
      items.push({ productId: p.id, name: p.name, qty: cItem.qty, price: p.price });
    });

    const discount = Number(this.saleDiscount) || 0;
    const total = Math.max(0, subtotal - discount);
    const id = `#${1085 + this.state.sales.length}`;
    const client = this.state.clients.find(c => c.id === this.selectedClientForSale);

    this.state.sales.unshift({
      id,
      clientId: this.selectedClientForSale,
      date: 'Agora',
      paymentMethod: this.selectedPaymentMethod,
      installments: this.selectedPaymentMethod === 'Cartão de Crédito' ? this.selectedInstallments : 1,
      discount,
      total,
      items
    });

    this.state.cashflow.unshift({
      id: `cf-${Date.now()}`,
      type: 'in',
      title: `Pedido ${id} — ${client ? client.name : 'Cliente'}`,
      category: `Venda • ${this.selectedPaymentMethod}`,
      amount: total,
      date: 'Agora'
    });

    this.cart = [{ productId: this.state.products[0].id, qty: 1 }];
    this.saleDiscount = 0;
    this.saveState();
    this.closeNewSaleModal();
    this.showToast(`Venda ${id} registrada`);
    this.navigate(this.currentScreen);
  },

  /* ==================== 4. CLIENTES ==================== */
  renderClientes() {
    const ranked = this.getClientStats();

    return `
      <div class="section-bar">
        <span class="section-heading">Ranking Top Clientes</span>
        <button class="btn-outline" onclick="app.openNewClientModal()">+ Novo Cliente</button>
      </div>

      <div class="list-stack">
        ${ranked.map((c, idx) => `
          <div class="row-card clickable" onclick="app.openClientModal('${c.id}')">
            <div class="avatar-box">${idx + 1}º</div>
            <div class="row-main">
              <strong>${c.name}</strong>
              <span>${c.tier} • ${c.phone} • ${c.city}</span>
            </div>
            <div class="row-side">
              <strong style="color:var(--gold)">${this.formatBRL(c.totalSpent)}</strong>
              <span>${c.ordersCount} pedidos</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  openClientModal(clientId) {
    const client = this.getClientStats().find(c => c.id === clientId);
    if (!client) return;

    document.getElementById('genericModalTitle').textContent = client.name;
    document.getElementById('genericModalBody').innerHTML = `
      <div class="card">
        <div class="section-bar">
          <span class="tag tag-gold">${client.tier} • Desde ${client.since}</span>
          <strong style="color:var(--gold);font-size:15px">${this.formatBRL(client.totalSpent)}</strong>
        </div>
        <div style="font-size:12.5px;display:flex;flex-direction:column;gap:5px;color:var(--text-muted)">
          <div><strong style="color:var(--text-main)">Telefone:</strong> ${client.phone}</div>
          <div><strong style="color:var(--text-main)">E-mail:</strong> ${client.email}</div>
          <div><strong style="color:var(--text-main)">Cidade:</strong> ${client.city}</div>
          <div><strong style="color:var(--text-main)">Preferências:</strong> ${client.notes}</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn-gold" style="padding:9px" onclick="app.closeGenericModal();app.openNewSaleModal('${client.id}')">Nova Venda</button>
          <button class="btn-outline" style="flex:1" onclick="app.showToast('Abrindo WhatsApp de ${client.name}')">WhatsApp</button>
        </div>
      </div>

      <span class="section-heading" style="margin-top:4px">Histórico de Vendas (${client.salesHistory.length})</span>
      <div class="list-stack">
        ${client.salesHistory.length ? client.salesHistory.map(s => `
          <div class="row-card">
            <div class="row-main">
              <strong>Pedido ${s.id} • ${s.date}</strong>
              <span>${s.items.map(i => `${i.qty}x ${i.name}`).join(', ')}</span>
            </div>
            <strong>${this.formatBRL(s.total)}</strong>
          </div>
        `).join('') : `<div class="card">Sem compras registradas.</div>`}
      </div>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  openNewClientModal() {
    document.getElementById('genericModalTitle').textContent = 'Novo Cliente';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Nome Completo</label>
        <input id="ncName" class="input-box" placeholder="Nome do cliente" />
      </div>
      <div class="field-group">
        <label>WhatsApp</label>
        <input id="ncPhone" class="input-box" placeholder="(31) 99999-0000" />
      </div>
      <div class="field-group">
        <label>Categoria</label>
        <select id="ncTier" class="select-box">
          <option value="Gold">Gold</option>
          <option value="Plano VIP">Plano VIP</option>
          <option value="Cliente">Cliente</option>
        </select>
      </div>
      <div class="field-group">
        <label>Cidade / Estado</label>
        <input id="ncCity" class="input-box" placeholder="Belo Horizonte, MG" />
      </div>
      <div class="field-group">
        <label>Medidas / Observações</label>
        <input id="ncNotes" class="input-box" placeholder="Ex: Camiseta G, Calça 42" />
      </div>
      <button class="btn-gold" onclick="app.saveNewClient()">Salvar Cadastro</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveNewClient() {
    const name = document.getElementById('ncName').value.trim();
    if (!name) return this.showToast('Informe o nome do cliente');
    this.state.clients.push({
      id: `c-${Date.now()}`,
      name,
      tier: document.getElementById('ncTier').value,
      phone: document.getElementById('ncPhone').value.trim() || '(31) 99000-0000',
      email: 'cliente@ngdconcept.com.br',
      city: document.getElementById('ncCity').value.trim() || 'Belo Horizonte, MG',
      notes: document.getElementById('ncNotes').value.trim() || 'Cadastrado via sistema.',
      since: '2026'
    });
    this.saveState();
    this.closeGenericModal();
    this.showToast('Cliente cadastrado');
    this.navigate('clientes');
  },

  /* ==================== 5. + PRODUTOS ==================== */
  renderProdutos() {
    const totalUnits = this.state.products.reduce((a, b) => a + b.stock, 0);
    const totalVal = this.state.products.reduce((a, b) => a + (b.stock * b.price), 0);

    return `
      <div class="grid-2">
        <div class="analytics-kpi-box">
          <span class="kpi-label">Peças em Estoque</span>
          <div class="kpi-box-val">${totalUnits} un.</div>
          <span class="kpi-box-sub">${this.state.products.length} modelos ativos</span>
        </div>
        <div class="analytics-kpi-box gold-highlight">
          <span class="kpi-label">Valor em Grade</span>
          <div class="kpi-box-val" style="color:var(--gold)">${this.formatBRL(totalVal)}</div>
          <span class="kpi-box-sub">Preço de venda</span>
        </div>
      </div>

      <div class="section-bar">
        <span class="section-heading">Catálogo &amp; Estoque</span>
        <button class="btn-outline" onclick="app.openNewProductModal()">+ Nova Peça</button>
      </div>

      <div class="list-stack">
        ${this.state.products.map(p => {
          const low = p.stock <= p.minStock;
          const grossMargin = Math.round(((p.price - p.cost) / p.price) * 100);
          return `
            <div class="row-card">
              <div class="row-main">
                <strong>${p.name}</strong>
                <span>Venda: ${this.formatBRL(p.price)} • Margem ${grossMargin}%</span>
                <span style="color:${low ? 'var(--danger)' : 'var(--gold)'};font-weight:600">
                  ${low ? `Estoque baixo: ${p.stock} un.` : `Grade (${p.size}): ${p.stock} un.`}
                </span>
              </div>
              <div class="stepper">
                <button class="step-btn" onclick="app.adjustStock('${p.id}', -1)">-</button>
                <strong style="min-width:20px;text-align:center;font-size:13px">${p.stock}</strong>
                <button class="step-btn" onclick="app.adjustStock('${p.id}', 1)">+</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  adjustStock(productId, delta) {
    const p = this.state.products.find(x => x.id === productId);
    if (!p) return;
    p.stock = Math.max(0, p.stock + delta);
    this.saveState();
    this.navigate('produtos');
  },

  openNewProductModal() {
    document.getElementById('genericModalTitle').textContent = 'Cadastrar Nova Peça';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Nome da Peça</label>
        <input id="npName" class="input-box" placeholder="Ex: Camisa Linho NGD Concept" />
      </div>
      <div class="grid-2">
        <div class="field-group">
          <label>Custo (R$)</label>
          <input id="npCost" type="number" step="0.01" class="input-box" placeholder="85.00" />
        </div>
        <div class="field-group">
          <label>Preço de Venda (R$)</label>
          <input id="npPrice" type="number" step="0.01" class="input-box" placeholder="239.90" />
        </div>
      </div>
      <div class="grid-2">
        <div class="field-group">
          <label>Quantidade Inicial</label>
          <input id="npStock" type="number" class="input-box" value="12" />
        </div>
        <div class="field-group">
          <label>Grade / Tamanhos</label>
          <input id="npSize" class="input-box" value="P / M / G" />
        </div>
      </div>
      <button class="btn-gold" onclick="app.saveNewProduct()">Adicionar ao Estoque</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveNewProduct() {
    const name = document.getElementById('npName').value.trim();
    if (!name) return this.showToast('Informe o nome da peça');
    const cost = parseFloat(document.getElementById('npCost').value) || 70;
    const price = parseFloat(document.getElementById('npPrice').value) || 199.90;
    const stock = parseInt(document.getElementById('npStock').value, 10) || 10;
    const size = document.getElementById('npSize').value.trim() || 'M / G';

    this.state.products.unshift({
      id: `p-${Date.now()}`,
      name,
      sku: `NGD-${Math.floor(600 + Math.random() * 300)}`,
      price,
      cost,
      stock,
      minStock: 5,
      size
    });
    this.saveState();
    this.closeGenericModal();
    this.showToast('Peça cadastrada no estoque');
    this.navigate('produtos');
  },

  /* ==================== 6. FLUXO DE CAIXA ==================== */
  renderFluxo() {
    const totalIn = this.state.cashflow.filter(c => c.type === 'in').reduce((a, b) => a + b.amount, 0);
    const totalOut = this.state.cashflow.filter(c => c.type === 'out').reduce((a, b) => a + b.amount, 0);
    const balance = totalIn - totalOut;

    return `
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Saldo Disponível em Caixa</span>
          <span class="tag tag-gold">Consolidado</span>
        </div>
        <div class="summary-value">${this.formatBRL(balance)}</div>
        <div class="grid-2" style="padding-top:10px;border-top:1px solid var(--border-line)">
          <div>
            <span style="font-size:11px;color:var(--text-muted)">Entradas</span>
            <strong style="display:block;font-size:14px;color:var(--gold)">+ ${this.formatBRL(totalIn)}</strong>
          </div>
          <div>
            <span style="font-size:11px;color:var(--text-muted)">Saídas</span>
            <strong style="display:block;font-size:14px;color:var(--danger)">- ${this.formatBRL(totalOut)}</strong>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <button class="btn-outline" onclick="app.openCashModal('in')">+ Registrar Entrada</button>
        <button class="btn-outline" onclick="app.openCashModal('out')">- Registrar Saída</button>
      </div>

      <span class="section-heading">Extrato de Movimentações</span>
      <div class="list-stack">
        ${this.state.cashflow.map(cf => `
          <div class="row-card">
            <div class="row-main">
              <strong>${cf.title}</strong>
              <span>${cf.category} • ${cf.date}</span>
            </div>
            <div class="row-side">
              <strong style="color:${cf.type === 'in' ? 'var(--gold)' : 'var(--danger)'}">
                ${cf.type === 'in' ? '+' : '-'} ${this.formatBRL(cf.amount)}
              </strong>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  openCashModal(type) {
    document.getElementById('genericModalTitle').textContent = type === 'in' ? 'Registrar Entrada' : 'Registrar Saída';
    document.getElementById('genericModalBody').innerHTML = `
      <div class="field-group">
        <label>Descrição</label>
        <input id="cfTitle" class="input-box" placeholder="Descrição do lançamento" />
      </div>
      <div class="field-group">
        <label>Valor (R$)</label>
        <input id="cfAmount" type="number" step="0.01" class="input-box" placeholder="0,00" />
      </div>
      <div class="field-group">
        <label>Categoria</label>
        <input id="cfCategory" class="input-box" value="${type === 'in' ? 'Receita Operacional' : 'Fornecedor / Logística'}" />
      </div>
      <button class="btn-gold" onclick="app.saveCashEntry('${type}')">Salvar Lançamento</button>
    `;
    document.getElementById('genericModalOverlay').classList.add('open');
  },

  saveCashEntry(type) {
    const title = document.getElementById('cfTitle').value.trim();
    const amount = parseFloat(document.getElementById('cfAmount').value);
    const category = document.getElementById('cfCategory').value.trim();
    if (!title || !amount) return this.showToast('Preencha descrição e valor');

    this.state.cashflow.unshift({
      id: `cf-${Date.now()}`,
      type,
      title,
      category,
      amount,
      date: 'Agora'
    });
    this.saveState();
    this.closeGenericModal();
    this.navigate('fluxo');
  },

  /* ==================== 7. CRM ==================== */
  renderCRM() {
    return `
      <div class="section-bar">
        <span class="section-heading">Atendimentos &amp; Plano VIP</span>
      </div>
      <div class="list-stack">
        ${this.state.crmLeads.map(l => `
          <div class="card">
            <div class="section-bar" style="margin-bottom:6px">
              <span class="tag tag-gold">${l.tag} • ${l.status}</span>
              <strong style="color:var(--gold);font-size:13.5px">${this.formatBRL(l.value)}</strong>
            </div>
            <strong style="font-size:14px;display:block">${l.name}</strong>
            <span style="font-size:12px;color:var(--text-muted);display:block;margin:2px 0 8px">${l.phone}</span>
            <p style="font-size:12px;color:var(--text-muted);padding:8px 10px;background:var(--bg-card-subtle);border-radius:7px;margin-bottom:10px">
              ${l.action}
            </p>
            <div class="grid-2">
              <button class="btn-outline" onclick="app.showToast('Mensagem enviada para ${l.name}')">Contatar</button>
              <button class="btn-gold" style="padding:8px" onclick="app.openNewSaleModal()">Gerar Pedido</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==================== 8. METAS ==================== */
  renderMetas() {
    const current = this.getTotalRevenue() + 34200;
    const goal = this.state.monthlyGoal;
    const pct = Math.min(100, Math.round((current / goal) * 100));
    const diff = Math.max(0, goal - current);

    return `
      <div class="summary-panel">
        <div class="summary-top">
          <span class="summary-label">Meta Mensal • Outubro</span>
          <span class="tag tag-gold">${pct}% atingida</span>
        </div>
        <div class="summary-value">${this.formatBRL(current)}</div>
        <div class="bar-progress">
          <div class="bar-progress-fill" style="width:${pct}%"></div>
        </div>
        <span style="font-size:12px;color:var(--text-muted)">
          Alvo: ${this.formatBRL(goal)} • Falta: ${this.formatBRL(diff)}
        </span>
      </div>

      <div class="card">
        <div class="field-group">
          <label>Definir Meta Mensal (R$)</label>
          <input id="goalInput" type="number" step="1000" class="input-box" value="${goal}" />
        </div>
        <button class="btn-gold" onclick="app.updateGoal()">Salvar Meta</button>
      </div>
    `;
  },

  updateGoal() {
    const val = parseFloat(document.getElementById('goalInput').value);
    if (val > 0) {
      this.state.monthlyGoal = val;
      this.saveState();
      this.showToast('Meta atualizada');
      this.navigate('metas');
    }
  },

  /* ==================== 9. PRECIFICAÇÃO ==================== */
  renderPrecificacao() {
    return `
      <div class="card">
        <div class="field-group">
          <label>Custo de Produção / Fornecedor (R$)</label>
          <input id="calcCost" type="number" value="85" class="input-box" oninput="app.recalcPricing()" />
        </div>
        <div class="grid-2">
          <div class="field-group">
            <label>Impostos &amp; Taxas (%)</label>
            <input id="calcTax" type="number" value="12" class="input-box" oninput="app.recalcPricing()" />
          </div>
          <div class="field-group">
            <label>Embalagem / Envio (%)</label>
            <input id="calcFixed" type="number" value="8" class="input-box" oninput="app.recalcPricing()" />
          </div>
        </div>
        <div class="field-group">
          <label>Margem Líquida Desejada (%)</label>
          <input id="calcMargin" type="number" value="42" class="input-box" oninput="app.recalcPricing()" />
        </div>
        <div id="pricingResultBox" class="summary-panel" style="margin-top:8px"></div>
      </div>
    `;
  },

  recalcPricing() {
    const cost = parseFloat(document.getElementById('calcCost')?.value) || 0;
    const tax = parseFloat(document.getElementById('calcTax')?.value) || 0;
    const fixed = parseFloat(document.getElementById('calcFixed')?.value) || 0;
    const margin = parseFloat(document.getElementById('calcMargin')?.value) || 0;
    const totalPct = (tax + fixed + margin) / 100;
    const box = document.getElementById('pricingResultBox');
    if (!box) return;

    if (totalPct >= 0.95) {
      box.innerHTML = `<span style="font-size:12px;color:var(--danger)">Reduza os percentuais para calcular.</span>`;
      return;
    }
    const price = cost / (1 - totalPct);
    const profit = price * (margin / 100);
    const markup = cost > 0 ? (price / cost).toFixed(2) : '0.00';
    const roi = cost > 0 ? ((profit / cost) * 100).toFixed(0) : '0';

    box.innerHTML = `
      <span class="summary-label">Preço de Venda Sugerido</span>
      <div class="summary-value" style="color:var(--gold);margin:4px 0 10px">${this.formatBRL(price)}</div>
      <div class="summary-grid" style="padding-top:8px;border-top:1px solid var(--border-line)">
        <div class="summary-col">
          <span>Lucro Líquido</span>
          <strong>${this.formatBRL(profit)}</strong>
        </div>
        <div class="summary-col">
          <span>Rentab. (ROI)</span>
          <strong style="color:var(--gold)">+${roi}%</strong>
        </div>
        <div class="summary-col">
          <span>Markup</span>
          <strong>${markup}x</strong>
        </div>
      </div>
    `;
  },

  /* ==================== 10. ACADEMY ==================== */
  renderAcademy() {
    return `
      <div class="list-stack">
        ${this.state.academy.map(item => `
          <div class="card clickable" onclick="app.showToast('Reproduzindo: ${item.title}')">
            <div class="section-bar" style="margin-bottom:6px">
              <span class="tag tag-gold">${item.area}</span>
              <span style="font-size:11.5px;color:var(--text-muted)">${item.duration}</span>
            </div>
            <strong style="font-size:13.5px;display:block">${item.title}</strong>
            <div class="bar-progress">
              <div class="bar-progress-fill" style="width:${item.progress}%"></div>
            </div>
            <span style="font-size:11px;color:var(--text-muted)">${item.progress}% concluído</span>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==================== 11. NEWS ==================== */
  renderNews() {
    return `
      <div class="list-stack">
        ${this.state.news.map(n => `
          <div class="card">
            <div class="section-bar" style="margin-bottom:6px">
              <span class="tag tag-gold">${n.category}</span>
              <span style="font-size:11px;color:var(--text-muted)">${n.date}</span>
            </div>
            <strong style="font-size:14px;display:block;margin-bottom:6px">${n.title}</strong>
            <p style="font-size:12.5px;color:var(--text-muted);line-height:1.5">${n.text}</p>
          </div>
        `).join('')}
      </div>
    `;
  },

  /* ==================== 12. AJUDA & AJUSTE ==================== */
  renderAjuda() {
    return `
      <div class="card">
        <strong style="font-size:14px;display:block;margin-bottom:6px">Suporte Operacional NGD Concept</strong>
        <p style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px">
          Canal direto para suporte de vendas, envios e operação de loja.
        </p>
        <button class="btn-gold" onclick="app.showToast('Atendimento iniciado')">Abrir Chamado</button>
      </div>
    `;
  },

  renderAjuste() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return `
      <div class="card">
        <span class="section-heading" style="display:block;margin-bottom:10px">Tema do Aplicativo</span>
        <div class="grid-2">
          <button class="pay-tile ${currentTheme === 'black-gold' ? 'selected' : ''}" onclick="app.setTheme('black-gold');app.navigate('ajuste')">
            Preto &amp; Dourado
          </button>
          <button class="pay-tile ${currentTheme === 'white-gold' ? 'selected' : ''}" onclick="app.setTheme('white-gold');app.navigate('ajuste')">
            Branco &amp; Dourado
          </button>
        </div>
      </div>

      <div class="card">
        <div class="field-group">
          <label>Identificação da Loja</label>
          <input class="input-box" value="${this.state.storeName}" onchange="app.state.storeName=this.value;app.saveState()" />
        </div>
        <div class="field-group" style="margin-bottom:0">
          <label>Instagram</label>
          <input class="input-box" value="${this.state.instagram}" readonly />
        </div>
      </div>

      <button class="btn-outline" style="width:100%" onclick="app.resetData()">Restaurar Base Padrão</button>
    `;
  },

  closeGenericModal() {
    document.getElementById('genericModalOverlay').classList.remove('open');
  }
};

window.addEventListener('DOMContentLoaded', () => app.init());
